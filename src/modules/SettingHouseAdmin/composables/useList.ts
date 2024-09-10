import { computed, ref} from 'vue';
import { makeRequest } from 'src/composables/useRequest';
import { Tables } from 'src/declarations/components/table';
import { TABLE_SETTINGS } from 'src/constants/table-settings';
import { usePagination } from 'src/composables/usePagination';
import { useQueryString } from 'src/composables/useQueryString';
import { BasePagination } from 'src/declarations/components/pagination';
import { Nfc } from 'src/declarations/responses/nfc';
import { useServiceFilters } from './useFilters';
import NfcApi from 'src/backend/api/classes/NfcApiClass';
import {useConfirmationDialog} from 'src/composables/useConfirmationDialog';
import { API_SERVER } from 'src/constants/common';
import { useNotifications } from 'src/composables/useNotifications';
export function useList(){ 

 const users = ref([]);
 const TABLE_COLUMNS: Array < Tables.TableColumn > = [
  {
    name: 'type',
    label: 'Параметр',
    field: 'type',
    align: 'center',
    sortable: false,
},
  {
    name: 'val_1',
    label: 'Школа №1 Старшая школа',
    field: 'val_1',
    align: 'center',
    sortable: false,
},
{
    name: 'val_2',
    label: 'Школа №1 Младшая школа',
    field: 'val_2',
    align: 'center',
    sortable: true,
},
];
const TABLE_COLUMNS_CONTROL: Array < Tables.TableColumn > = [
  {
    name: 'org',
    label: 'Объект',
    field: 'org',
    align: 'center',
    sortable: false,
  },
  {
    name: 'time_request',
    label: 'Время опроса',
    field: 'time_request',
    align: 'center',
    sortable: false,
  },
  {
  name: 'temp',
  label: 'Температура (подающий трубопровод) ',
  field: 'temp',
  align: 'center',
  sortable: false,
},
{
  name: 'temp_obr',
  label: 'Температура (обратный трубопровод)',
  field: 'temp_obr',
  align: 'center',
  sortable: true,
},
{
  name: 'pressure_1',
  label: 'Давление 1, Мпа',
  field: 'pressure_1',
  align: 'center',
  sortable: true,
},
{
  name: 'pressure_2',
  label: 'Давление 2, Мпа',
  field: 'pressure_2',
  align: 'center',
  sortable: true,
  
},
{
  name: 'time_1',
  label: 'Время наработки, ч.',
  field: 'time_1',
  align: 'center',
  sortable: true,
},
{
  name: 'time_2',
  label: 'Время работы узла, ч.',
  field: 'time_2',
  align: 'center',
  sortable: true,
},
];
const visibleUpload = ref(false);
const visibleDialog = ref(false);
const list = ref<Nfc.NfcBrief[]>([]);

const { filterParams, sanitizeQueryFilterParams, defaultFilterParams } = useServiceFilters();

const { paginationParams, sanitizeQueryPagination, setPaginationFromData, defaultPaginator } =
    usePagination();
const receive = async (response: Awaited<ReturnType<typeof NfcApi.nfcList>>) => {
    list.value = response.items;
    setPaginationFromData(response);

    await setQueryParams(paginationParams.value);
    await setQueryParams(filterParams.value);
  };
  const combinedParametersSanitizers = {
    ...sanitizeQueryFilterParams(),
    ...sanitizeQueryPagination(),
  };
const combinedParameters = computed(() => ({ ...filterParams.value ,...paginationParams.value }));
const { getQueryParams, setQueryParams } = useQueryString(combinedParametersSanitizers, {
     ...filterParams.value,  
     ...paginationParams.value,
  });

    const fetch = async () =>
      makeRequest(async () =>
      receive(
        await  NfcApi.nfcList(combinedParameters.value)
      )
    );
    const onRequest = async ({ pagination: tablePagination }: { pagination: BasePagination }) => {
    setPaginationFromData(tablePagination);

    await fetch();
  };
const init = async () => {
  await fetch();
  const queryParams = getQueryParams();
  setPaginationFromData(queryParams);
  console.log(paginationParams.value)
};

const clearParameters = async () => {
  paginationParams.value = defaultPaginator();
  filterParams.value = defaultFilterParams();

  await fetch();
};

const deleteRfid = async (rfid_id : number) => {
  const response = await NfcApi.nfcDelete(rfid_id);
  const index = list.value.findIndex((item) => item.id === rfid_id);
  list.value.splice(index, 1);
}
const $notify = useNotifications();
const rfidCurrent = ref<Nfc.NfcBrief>();
const openSetting = async (rfidData : Nfc.NfcBrief) => {
  rfidCurrent.value = rfidData;
  visibleDialog.value = !visibleDialog.value;
}

const {
  withConfirmation
} = useConfirmationDialog();
// @click=deleteTempUser(worker.id)
const visibleConfirm = ref(false);
const onViewConfirmationDialog = (rfid : Nfc.NfcBrief) => {
  visibleConfirm.value = true;
  withConfirmation({
      title: 'Удаление',
      message: 'Вы точно хотите удалить RFID?'
  }, () => {
      deleteRfid(rfid.id);
      visibleConfirm.value = true;
  }, () => {
      visibleConfirm.value = true;
  });
};

const pushFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await makeRequest(async () => NfcApi.nfcUpload(formData)); 
  if (response.success == true) {
    $notify.success('Успешно доблены RFID')
    visibleUpload.value = false;
    clearParameters();
  }else{
    $notify.error('Произошла ошибка')
  }
}


const goUpload = async (files) => {
  return new Promise(() => {
    setTimeout(() => {
      pushFile(files[0]);
    }, 2000);
  });
}

  return {
    rfidCurrent,
    openSetting,
    deleteRfid,
    init,
    list,
    TABLE_SETTINGS, 
    TABLE_COLUMNS,
    users,
    paginationParams, 
    onRequest,
    visibleDialog,
    filterParams,
    fetch,
    clearParameters,
    onViewConfirmationDialog,
    visibleUpload,
    goUpload,
    TABLE_COLUMNS_CONTROL
  };
}


