import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'


export default{
   // namespaced: true, ??
    state(){
        return{
            books: [
                {
                    id: 'book1',
                    title: 'Code',
                    author: 'someAuthor'
                    
                },
                {
                    id: 'book2',
                    title: '1948',
                    author: 'someAuthor2'
                    
                }


            ]

        }

    },
    mutations,
    actions,
    getters
}