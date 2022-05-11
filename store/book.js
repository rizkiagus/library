import gql from 'graphql-tag'

const state = () => ({
  listBook: [],
  listHomeBook: [],
})

const mutations = {
  setListBook(state, param) {
    state.listBook = param
  },
  setListHomeBook(state, param) {
    state.listHomeBook = param
  },
}

const actions = {
  async fetchBook(store) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
        query getBook {
          book(limit: 6, order_by: { book_id: desc }) {
            book_id
            title
            image
            author
          }
        }
      `,
    })
    store.commit('setListBook', response.data.book)
  },
  async fetchHomeBook(store) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
        query getBook {
          book {
            book_id
            title
            image
            author
          }
        }
      `,
    })
    store.commit('setListHomeBook', response.data.book)
  },
}

export default { state, mutations, actions }
