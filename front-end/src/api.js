let BASE = 'https://api.b7web.com.br/devsfood/api'

export default {
    getCategorias: async()=>{
        // GET /categories
        const res = await fetch(BASE+'/categories')
        const json = await res.json();
        return json
    },
    // pegar os produtos
    getProducts: async(category,page,search)=>{
        // GET /products ([search,page,category])
        let fields = {
            category:0,
            pages:0,
            search:''
        }
        if (category != 0 ) {
            fields.category = category
        }
        if (page>0) {
            fields.page = page
        }
        if (search!='') {
            fields.search = search
        }

        let queryString = new URLSearchParams(fields).toString();

        const res = await fetch(BASE+'/products?'+queryString);
        const json = await res.json();
        return json
    }
}