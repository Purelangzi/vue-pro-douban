export default {
    path: '/mine',
    component: () => import('@/views/Mine/Mine'),
    children: [
        { path: '', redirect: 'list'},
        { name: 'list', path: 'list', component: () => import('@/views/Mine/List') },
        { name: 'car', path: 'car', component: () => import('@/views/Mine/Car') }
    ]
}