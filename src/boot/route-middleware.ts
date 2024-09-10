import { boot } from 'quasar/wrappers';
import { useUserStore } from 'src/stores/user.store';

export interface MetaParams {
    /**
     * `true` или список идентификаторов ролей пользователей
     * которым доступен данный роут
     */
    authorization?: boolean | Array<number>;
    noAuthorization?: boolean;
    haveWorkers? : boolean;
    isAdmin?: boolean;
  }
  export default boot(({ router }) => {
    router.beforeResolve(async (to ) => {
      const auth = (m?: MetaParams) => m && m.authorization;
      const needNoAuth = (m?: MetaParams) => m && m.noAuthorization;
      const userStore = useUserStore();
      const { meta } = to;
    
      if (auth(meta) == userStore.getIsAdmin) {
        console.log('sda')
        // Если роут не имеет пометку только авторизованным и не имеет пометку требуется не авторизованый, то все ОК, пропускаем
        return;
      }
      if (auth(meta) !== userStore.getIsAdmin) {
        // Если роут не имеет пометку только авторизованным и не имеет пометку требуется не авторизованый, то все ОК, пропускаем
        if(userStore.getIsAdmin){
          router.push('/')
        }else {
          router.push('/director_board')
        }
        
      }
      // Если такая пометка есть, то проверяем вообще что пользователь авторизован или не авторизован
      // if ((auth(meta) && !authStore.isAuthenticated) || (needNoAuth(meta) && authStore.isAuthenticated)) {
    
      //   router.push('/login')
      // }

    });
  },);
