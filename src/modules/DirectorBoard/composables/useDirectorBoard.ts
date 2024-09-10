/* eslint-disable @typescript-eslint/ban-ts-comment */
import { computed, ref } from 'vue';
import { Locks } from 'src/declarations/responses/locks';
import LocksApi from 'src/backend/api/classes/LocksApiClass';
import { makeRequest } from 'src/composables/useRequest';
import { User } from 'src/declarations/responses/user';
import { useNotifications } from 'src/composables/useNotifications';
// import { useCurrentUser } from 'src/declarations/composables/useCurrentUser'; 

export function useList() {
 
const mock = ref([
  {
    month: '2024й год',
    upper_school_hvs: 'ХВС',
    little_school_hvs: 'ХВС',
    upper_school_warm: 'Тепло',
    little_school_warm: 'Тепло',
  },
  {
    month: 'Январь',
    upper_school_hvs: 10,
    little_school_hvs: 15,
    upper_school_warm: 20,
    little_school_warm: 25
  },
  {
    month: 'Февраль',
    upper_school_hvs: 12,
    little_school_hvs: 16,
    upper_school_warm: 22,
    little_school_warm: 27
  },
  {
    month: 'Март',
    upper_school_hvs: 14,
    little_school_hvs: 18,
    upper_school_warm: 24,
    little_school_warm: 29
  },
  {
    month: 'Апрель',
    upper_school_hvs: 16,
    little_school_hvs: 20,
    upper_school_warm: 26,
    little_school_warm: 31
  },
  {
    month: 'Май',
    upper_school_hvs: 18,
    little_school_hvs: 22,
    upper_school_warm: 28,
    little_school_warm: 33
  },
  {
    month: 'Июнь',
    upper_school_hvs: 20,
    little_school_hvs: 24,
    upper_school_warm: 30,
    little_school_warm: 35
  },
  {
    month: 'Июль',
    upper_school_hvs: 22,
    little_school_hvs: 26,
    upper_school_warm: 32,
    little_school_warm: 37
  },
  {
    month: 'Август',
    upper_school_hvs: 24,
    little_school_hvs: 28,
    upper_school_warm: 34,
    little_school_warm: 39
  },
  {
    month: 'Сентябрь',
    upper_school_hvs: 26,
    little_school_hvs: 30,
    upper_school_warm: 36,
    little_school_warm: 41
  },
  {
    month: 'Октябрь',
    upper_school_hvs: '-',
    little_school_hvs: '-',
    upper_school_warm: '-',
    little_school_warm: '-'
  },
  {
    month: 'Ноябрь',
    upper_school_hvs: '-',
    little_school_hvs: '-',
    upper_school_warm: '-',
    little_school_warm: '-',
  },
  {
    month: 'Декабрь',
    upper_school_hvs: '-',
    little_school_hvs: '-',
    upper_school_warm: '-',
    little_school_warm: '-',
  },
  {
    month: 'ТЕКУЩЕЕ ЗНАЧЕНИЕ',
    upper_school_hvs: 162 ,
    little_school_hvs: 178,
    upper_school_warm: 246,
    little_school_warm: 290
  }
]);

    return {
      mock

    }
  }
  