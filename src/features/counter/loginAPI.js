import axios from 'axios'

const MY_SERVER ="http://127.0.0.1:8000/login"

export function doLogin(cred) {
  return axios.post(MY_SERVER,cred)
}

// נתיבי לוגאסי
// from . import views
// urlpatterns = [
    
//     path('', views.index),
    
//     path('products', views.ProductsView.as_view()),
//     path('products/<int:pk>', views.ProductsView.as_view()),
//     # path('addproduct', views.addproduct),
//     # path('delproduct/<int:id>',views.delproduct),
//     path('login', TokenObtainPairView.as_view()),
//     path('members', views.members),
//     path('register', views.register),
    
// ]