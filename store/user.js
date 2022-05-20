import { gql } from 'graphql-tag'
const state = () => ({
  userLogin: [],
})

const mutations = {
  setUserLogin(state, param) {
    state.userLogin = param
  },
}
const actions = {
  async getListUser(store, username, passwrod) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
        query listUser($username: String, $password: String) {
          user(
            where: {
              username: { _eq: $username }
              passwrod: { _eq: $password }
            }
          ) {
            id
            namalengkap
            username
          }
        }
      `,
      variables: { username, passwrod },
    })
    store.commit('setUserLogin', response.data.user)
  },
}
export default { state, mutations, actions }
