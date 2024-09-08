<template>
  <s-page>
    
    <s-header
      :create-btn="false"
      title="Осмотр учреждений"
    />
    <div class="home_wrapper">
    
      <div class="home_wrapper ">
    <h5 class="mt-base-25">Доступные учреждения</h5>
    <div class="grid " >
      <div @click="handleClick(index)"  v-for="(block, index) in items" :key="index">
        <div class="block-1" :class="block.ok? 'bg-brand-warning' : 'bg-danger '">
          <div class="flex justify-center items-center">
           <div class="mt-base-35"> {{ block.title }}</div>
          </div>
        </div>
        <s-dialog :show="activeBlock == index" class="content-block" :rightIconClose="false" :title="block.title">
          <div>
            {{ block.title }}
          </div>
          <q-btn @click="activeBlock=null">exit</q-btn>
        </s-dialog>
      </div>
    </div>
  </div>
  </div>

    <div class="home_wrapper">

    </div>
    
  </s-page>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
// import SInput from 'src/components/ui/Input.vue';
import { useList } from '../composables/useAdministrationBoard';
import { useMeta } from 'quasar';


export default defineComponent({
  name: 'AddPhonePage',
  components: {
  },
  setup() {
    const {

  } = useList();


  
  // const handleInput = (value) => {
  //   // Убираем маску перед сохранением в переменную phone
  //   phoneData.value.phone = value.replace(/\D/g, '');
  // };
  
    const handleClick = (index: any) => {
        console.log(currentBlock.value)
        activeBlock.value = (activeBlock.value === index) ? null : index;
        currentBlock.value = index;
      };
      const activeBlock = ref(null);
      const currentBlock = ref(null);
      const showContent = ref(true);
    const  toggleContent = (block) => {
        console.log(showContent.value)
        showContent.value != showContent.value

      }
      const items = ref([
        { id: 15, title: 'Гимназия №4', ok : false, description: 'Описание карточки 3' },
        { id: 16, title: 'Гимназия №5', ok : false, description: 'Описание карточки 3' },
        { id: 1, title: 'Школа №1', ok : true, description: 'Описание карточки 1' },
        { id: 2, title: 'Школа №2', ok : true, description: 'Описание карточки 2' },
        { id: 3, title: 'Школа №3', ok : true, description: 'Описание карточки 3' },
      
        { id: 4, title: 'Школа №4', ok : true, description: 'Описание карточки 4' },
        { id: 5, title: 'Школа №5', ok : true, description: 'Описание карточки 5' },
        { id: 6, title: 'Школа №7', ok : true, description: 'Описание карточки 6' },
        { id: 7, title: 'Школа №8', ok : true, description: 'Описание карточки 3' },
        { id: 8, title: 'Школа №9', ok : true, description: 'Описание карточки 3' },
        { id: 9, title: 'Школа №10', ok : true, description: 'Описание карточки 3' },
        { id: 11, title: 'Школа №11', ok : true, description: 'Описание карточки 3' },
        { id: 12, title: 'Гимназия №1', ok : true, description: 'Описание карточки 3' },
        { id: 13, title: 'Гимназия №2', ok : true, description: 'Описание карточки 3' },
        { id: 14, title: 'Гимназия №3', ok : true, description: 'Описание карточки 3' },
        { id: 17, title: 'Дет.сад №1', ok : true, description: 'Описание карточки 3' },
        { id: 18, title: 'Дет.сад №2', ok : true, description: 'Описание карточки 3' },
        { id: 19, title: 'Дет.сад №3', ok : true, description: 'Описание карточки 3' },
        { id: 20, title: 'Дет.сад №4', ok : true, description: 'Описание карточки 3' },
        { id: 21, title: 'Дет.сад №5', ok : true, description: 'Описание карточки 3' },
        { id: 22, title: 'Дет.сад №6', ok : true, description: 'Описание карточки 3' },
        { id: 23, title: 'Дет.сад №7', ok : true, description: 'Описание карточки 3' },
        { id: 24, title: 'Дет.сад №8', ok : true, description: 'Описание карточки 3' },
        { id: 25, title: 'Дет.сад №9', ok : true, description: 'Описание карточки 3' },
        { id: 26, title: 'Дет.сад №10', ok : true, description: 'Описание карточки 3' },

    ]);

    const showDetailsItem = ref(null);
    const showDetailsRow = ref(null);

    const showDetails = (rowIndex, itemIndex) => {
      showDetailsItem.value = items.value[rowIndex][itemIndex];
      showDetailsRow.value = rowIndex;
    };

    return {

    data: [1,2,3,4,5,6,7,8],
    showContent,
    toggleContent,
    handleClick,
    activeBlock,
    items,
    showDetailsItem,
      showDetailsRow,
      showDetails,
    };
  },
});
</script>
<style>
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  position: relative;
}

.row-my {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.details-block {
  background: #423e3e;
  padding: 1rem;
  margin-top: 1rem;
  position: absolute;
  top: 100px;
  /* bottom: 50px; */
  left: 0;
  width: 100%;
  z-index: 10; /* Чтобы блок был над карточками */
}
</style>