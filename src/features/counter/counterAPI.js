import axios from 'axios'

const MY_SERVER ="http://127.0.0.1:8000/products"

export function fetchProducts() {
  return axios.get(MY_SERVER)
}

export function delProduct(id) {
    return axios.delete(MY_SERVER + "/" +id)
  }

  export function addProduct(prod) {
    // console.log(prod);
    return axios.post(MY_SERVER,prod)
  }

  export function updProduct(prod) {
    return axios.put(MY_SERVER +"/" +prod.id,prod)
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