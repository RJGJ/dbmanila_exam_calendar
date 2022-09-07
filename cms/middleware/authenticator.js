export default async ({ app, redirect, route, error, store }) => {
  const token = await app.$auth.strategy.token.get()

  switch (route.name) {
    case 'index':
      if (token) {
        redirect('/dashboard')
      }
      break
  }

  store.commit('global/settings/userAuthentication', { status: (token) ? true : false })
}
