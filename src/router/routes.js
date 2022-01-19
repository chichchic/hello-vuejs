// NOTE: router auto creator from view folder
const importAll = r => r.keys().map(key => key.slice(2).replace('.vue', '').split('/'))
const pages = importAll(require.context('@/views', true, /\.vue$/));
const generateRoute = path => {
  const shortcut = path[0].toLowerCase()
  return shortcut.startsWith('home') ? '/' : path.map(p => p.toLowerCase()).join('/')
}
const layoutMeta = {
  About: 'TopNavLayout',
  Home: 'TopNavLayout'
}

export default pages.map(async path => {
  const { default: component } = await import(`@/views/${path.join('/')}`)
  const { name } = component
  const route = `/${generateRoute([...path])}`
  return {
    path: route,
    name,
    meta: { layout: layoutMeta[name] },
    component
  }
})