import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { resolve } from '../../../node_modules/@types/q';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];


  constructor( private http: HttpClient ) {

    this.cargarProductos();

  }


  private cargarProductos() {

    return new Promise(  ( resolve, reject ) => {

      // this.http.get('https://angular-html-25cf9.firebaseio.com/productos_idx.json')
      //     .subscribe( (resp: Producto[]) => {
      //       this.productos = resp;
      //       this.cargando = false;
      //       resolve();
      //     });

    
      this.productos=[
        {
        "categoria":"Formato Apaisado, 21 * 12 cm.96 pág. a color.(300 g.)",
        "cod":"prod-1",
        "titulo":"VILLA DE LEYVA, Eccehomo, La Candelaria",
        "url":"project-1"
        },
        {
        "categoria":"formato apaisado, 21 * 12 cm. 96 pág. a color. (300 g.)",
        "cod":"prod-2",
        "titulo":"SEAFLOWER, Colombia magica",
        "url":"project-2"
        },
        {
        "categoria":"Formato cuadrado, 22,5 * 22,5 cm. 112 pág.a color.(700 g.)",
        "cod":"prod-3",
        "titulo":"SABORES Y COLORES,recetas Prácticas para toda ocasión",
        "url":"project-3"
        },
        {
        "categoria":"Formato apaisado, 30 * 26 cm. 216 pág. a color.(1.8 kg.)",
        "cod":"prod-4",
        "titulo":"MEDELLIN DESDE EL CIELO",
        "url":"project-4"
        },
        {
        "categoria":"Formato vertical 22*28 cm. 84 pág.a color.(640 g.)",
        "cod":"prod-5",
        "titulo":"LEONIDAS LARA E HIJOS,Raíces que dejaron huella",
        "url":"project-5"
        },
        {
        "categoria":"Formato cuadrado 22,5*22,5 cm. 112 pág.a color.(700 g.)",
        "cod":"prod-6",
        "titulo":"HOY COCINO YO,recetas prácticas para toda ocasión",
        "url":"project-6"
        },
        {
        "categoria":"Formato apaisado, 34 * 28 cm.134 pág.a color.(1,5 kg.)",
        "cod":"prod-7",
        "titulo":"BOGOTA A VUELO DE CONDOR",
        "url":"project-7"
        },
        {
        "categoria":"Formato apaisado, 26 * 19 cm. 96 pág.a color.(600 g.)",
        "cod":"prod-8",
        "titulo":"EL TRICOLOR DE LIBERTAD",
        "url":"project-8"
        },
        {
        "categoria":"Formato Vertical, 16,5 * 24 cm, 32 pág. cada uno con mas de 34 fotos de época.",
        "cod":"prod-9",
        "titulo":"AÉROPLANES CUADRON FRÉRES 1,2,3,4",
        "url":"project-9"
        },
        {
        "categoria":"Formato apaisado, 27 * 25 cm. 190 pág.a color.(1,5 kg.)",
        "cod":"prod-10",
        "titulo":"COLOMBIA DE UTRAMAR DESDE EL CIELO ",
        "url":"project-10"
        },
        {
          "categoria":"Formato apaisado, 21 * 12 cm. 112 pág. a color. (330 g.)",
          "cod":"prod-11",
          "titulo":"CARTAGENA DE INDIAS, centro histórico- Getsemaní",
          "url":"project-11"

        }
        ];  

        this.cargando = false;

    });

  }

  getProducto( id: string ) {

    return this.http.get(`https://angular-html-25cf9.firebaseio.com/productos/${ id }.json`);

  }

  buscarProducto( termino: string ) {


    if ( this.productos.length === 0 ) {
      // cargar productos
      this.cargarProductos().then( () => {
        // ejecutar después de tener los productos
        // Aplicar filtro
        this.filtrarProductos( termino );
      });

    } else {
      // aplicar el filtro
      this.filtrarProductos( termino );
    }


  }

  private filtrarProductos( termino: string ) {

    // console.log(this.productos);
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0  ) {
        this.productosFiltrado.push( prod );
      }

    });


  }

}
