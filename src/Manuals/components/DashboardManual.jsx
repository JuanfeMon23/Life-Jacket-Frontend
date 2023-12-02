import React from "react";
import { styles } from "../../components/styles";
import { Title } from "../../components/globalComponents/Title";

export function DashboardManual() {
  return (
    <div className='content'>
        <div>
            {<Title Title='Manual de dashboard'/>}
        </div>
          <div>
              <div className={styles.subtitles}>Acceso al módulo de dashboard.</div>
              <div className={styles.parr}>Desde el menú desplegable, selecciona la opción de "Dashboard" para ingresar al módulo dedicado a la administración de las gráficas.</div>
              <img src="https://images.tango.us/workflows/cd1e435b-aaf9-4205-b8d6-32425cb6d66c/steps/25e8d8d3-4a77-4add-a88f-86e06153582f/140fabd1-d0ab-4b3e-82a9-f1bf299cf6b4.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.0968&fp-y=0.1365&fp-z=2.0471&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=6&mark-y=152&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NjMmaD05MSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"
              className={styles.img} />
          </div>

          <div>
              <div className={styles.subtitles}>Vista general del módulo.</div>
              <div className={styles.parr}>En esta vista, se encontrará toda la información referente a las gráficas, incluyendo no solo gráficas de línea sino también cartas que se comportan según el mes.</div>
              <img src="https://images.tango.us/workflows/cd1e435b-aaf9-4205-b8d6-32425cb6d66c/steps/aa1347d1-6dd8-465d-8d3d-7310606ecf76/4a5dd1c8-bd99-4b9f-9ffb-1132e0b72da4.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" 
               className={styles.img} />
          </div>

          <div>
              <div className={styles.subtitles}>Gráfica de dinero generado en ventas.</div>
              <div className={styles.parr}>En esta gráfica que se encuentra en la parte superior izquierda de la pantalla, el usuario puede visualizar el dinero que se ha generado en ventas según los meses del año que seleccione.</div>
              <img src="https://images.tango.us/workflows/cd1e435b-aaf9-4205-b8d6-32425cb6d66c/steps/d0e50a0d-0101-468c-ab82-c08d635edc46/7f9a2a28-ccff-49bf-8497-838f6e951b90.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=10&mark-y=196&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMDM2Jmg9NjMxJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" 
               className={styles.img} />
              <div className={styles.parr}>Para seleccionar el año, debe seleccionar el botón denominado "Seleccionar año", en el cuál se le desplegará la lista de los años que tienen registros activos de ventas. Después de esto, el usuario debe seleccionar el año para que la gráfica filtre los registros del mismo y se puedan visualizar en la gráfica.</div>
              <img src="https://images.tango.us/workflows/cd1e435b-aaf9-4205-b8d6-32425cb6d66c/steps/9786064a-daa0-44f3-aa75-f9223aa3f979/25167901-7eb5-46b2-8d6b-d32c6dd5155c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.2942&fp-y=0.3130&fp-z=2.5966&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=816&mark-y=187&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNjUmaD0xMDAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
               className={styles.img}  />
          </div>

          <div>
              <div className={styles.subtitles}>Gráfica de dinero invertido en mejoras.</div>
              <div className={styles.parr}>En esta gráfica que se encuentra en la parte superior derecha de la pantalla, el usuario puede visualizar el dinero que se ha invertido en mejoras a los vehículos activos en el sistema según los meses del año que seleccione.</div>
              <img src="https://images.tango.us/workflows/cd1e435b-aaf9-4205-b8d6-32425cb6d66c/steps/0048dc3c-c01d-4cd3-b1c5-823de81ba417/aded912b-6308-445a-8861-e0d7cc930e50.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=183&mark-y=174&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz05NjEmaD01ODUmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
               className={styles.img}  />
              <div className={styles.parr}>Para seleccionar el año, debe seleccionar el botón denominado "Seleccionar año", en el cuál se le desplegará la lista de los años que tienen registros activos de mejoras. Después de esto, el usuario debe seleccionar el año para que la gráfica filtre los registros del mismo y se puedan visualizar en la gráfica.</div>
              <img src="https://images.tango.us/workflows/cd1e435b-aaf9-4205-b8d6-32425cb6d66c/steps/8ac67437-f47a-4572-8bc7-a970e5054bfb/14ad73bc-8ae4-452c-8c17-d2af7e45ceec.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6944&fp-y=0.3896&fp-z=1.8846&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=923&mark-y=136&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xODImaD02MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
               className={styles.img} />
          </div>

          <div>

              <div className={styles.subtitles}>Gráfica de dinero invertido en compras.</div>
              <div className={styles.parr}>En esta gráfica que se encuentra en la parte inferior izquierda de la pantalla, el usuario puede visualizar el dinero que se ha generado en compras según los meses del año que seleccione.</div>
              <img src="https://images.tango.us/workflows/cd1e435b-aaf9-4205-b8d6-32425cb6d66c/steps/9e8c8c61-aa90-4f7c-9a48-ac42d25d5d70/cd84aadd-cfd5-4c94-82e3-35eed6508028.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=11&mark-y=100&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMTAwJmg9NjcwJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" 
               className={styles.img} />
              <div className={styles.parr}>Para seleccionar el año, debe seleccionar el botón denominado "Seleccionar año", en el cuál se le desplegará la lista de los años que tienen registros activos de compras. Después de esto, el usuario debe seleccionar el año para que la gráfica filtre los registros del mismo y se puedan visualizar en la gráfica.</div>
              <img src="https://images.tango.us/workflows/cd1e435b-aaf9-4205-b8d6-32425cb6d66c/steps/15e13efa-9ec3-4f8a-8f09-9011277ce463/d4c086c2-8127-4b14-b768-c9fc02c7262c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4061&fp-y=0.5970&fp-z=2.5975&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=468&mark-y=304&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNjUmaD0xMDAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
               className={styles.img}/>
          </div>

          <div>
              <div className={styles.subtitles}>Gráfica de dinero involucrado en intercambios.</div>
              <div className={styles.parr}>En esta gráfica que se encuentra en la parte inferior derecha de la pantalla, el usuario puede visualizar el dinero en efectivo que ha entrado o salido de los intercambios activo en el sistema según los meses del año que seleccione.</div>
              <img src="https://images.tango.us/workflows/cd1e435b-aaf9-4205-b8d6-32425cb6d66c/steps/a3e6ba63-e2d2-46d1-b479-3e7aa51b3d8a/0336cece-2703-4145-81e5-59ec268d528b.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6190&fp-y=0.6468&fp-z=1.4833&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=346&mark-y=196&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz04MjMmaD01MDImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
               className={styles.img} />
              <div className={styles.parr}>Para seleccionar el estado del dinero que el usuario desee filtrar, debe seleccionar el botón denominado "Estado", en el cuál se desplegarán dos opciones, "Entrante", es decir, el dinero en efectivo que ha entrado a través del intercambio,  o "Saliente", es decir, el dinero en efectivo que ha salido a través del intercambio. Después de esto, el usuario debe seleccionar el estado que desee consultar del dinero en efectivo para que la gráfica filtre los registros del mismo y se puedan visualizar en la gráfica.</div>
              <img src="https://images.tango.us/workflows/cd1e435b-aaf9-4205-b8d6-32425cb6d66c/steps/055c80cd-c3d9-4b47-bf04-2a900da7dbb4/5c20e5c6-216b-4c25-8fc1-50f7dc70a5ca.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7304&fp-y=0.6143&fp-z=2.6304&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=473&mark-y=279&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNTQmaD0xNDkmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
               className={styles.img}  />
              <div className={styles.parr}>Para seleccionar el año, debe seleccionar el botón denominado "Seleccionar año", en el cuál se le desplegará la lista de los años que tienen registros activos de intercambios. Después de esto, el usuario debe seleccionar el año para que la gráfica filtre los registros del mismo y se puedan visualizar en la gráfica.</div>
              <img src="https://images.tango.us/workflows/cd1e435b-aaf9-4205-b8d6-32425cb6d66c/steps/91497015-5495-4c54-b122-93bbfe0dbb21/955102eb-f0b8-4398-ae2e-9a69e7973874.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8084&fp-y=0.6111&fp-z=2.8834&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=699&mark-y=279&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNzkmaD05NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" 
               className={styles.img}  />
          </div>

          <div>
              <div className={styles.subtitles}>Carta de vehículos activos.</div>
              <div className={styles.parr}>Esta carta de color rojo, muestra los vehículos que se encuentran activos en el sistema.</div>
              <img src="https://images.tango.us/workflows/cd1e435b-aaf9-4205-b8d6-32425cb6d66c/steps/652898ec-07a2-4fe2-af08-37baffa4b1cb/c5185e4d-d881-48e9-8d30-e20fbbe9dbe9.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7764&fp-y=0.2483&fp-z=2.3536&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=732&mark-y=184&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NTMmaD0yMDgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
               className={styles.img}  />
          </div>

          <div>
              <div className={styles.subtitles}>Carta de dinero de ventas del mes actual.</div>
              <div className={styles.parr}>Esta carta de color azul, muestra el dinero que se ha generado en ventas activas del mes en el que se encuentre, es decir, mes a mes se actualiza este valor según la fecha en la que el usuario esté utilizando el aplicativo.</div>
              <img src="https://images.tango.us/workflows/cd1e435b-aaf9-4205-b8d6-32425cb6d66c/steps/329da5b4-c5d7-4ec8-8ff6-ac8440d6962e/dcf1bea8-5b21-4271-b916-3266c0455b51.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7748&fp-y=0.3556&fp-z=2.3536&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=740&mark-y=238&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NTMmaD0yMDgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
               className={styles.img}  />
          </div>

          <div>
              <div className={styles.subtitles}>Carta de dinero de compras del mes actual.</div>
              <div className={styles.parr}>Esta carta de color amarillo, muestra el dinero que se ha invertido en compras activas del mes en el que se encuentre, es decir, mes a mes se actualiza este valor según la fecha en la que el usuario esté utilizando el aplicativo.</div>
              <img src="https://images.tango.us/workflows/cd1e435b-aaf9-4205-b8d6-32425cb6d66c/steps/498d653b-ffae-4256-9b69-a43345e9ba3f/11d2c670-7489-401c-bfad-907d8ec75c7f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7773&fp-y=0.4972&fp-z=2.3536&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=733&mark-y=237&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NTMmaD0yMDgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
               className={styles.img}  />
          </div>

          <div>
              <div className={styles.subtitles}>Carta de dinero de mejoras del mes actual.</div>
              <div className={styles.parr}>Esta carta de color verde, muestra el dinero que se ha invertido en mejoras de vehículos activos del mes en el que se encuentre, es decir, mes a mes se actualiza este valor según la fecha en la que el usuario esté utilizando el aplicativo.</div>
              <img src="https://images.tango.us/workflows/cd1e435b-aaf9-4205-b8d6-32425cb6d66c/steps/271b6327-0e47-413f-a52e-0796b4d714d2/48f6aba0-72d8-4ea9-a150-12d3419cd794.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7764&fp-y=0.6416&fp-z=2.3536&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=735&mark-y=236&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NTMmaD0yMDgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
               className={styles.img}  />
          </div>

          <div>
              <div className={styles.subtitles}>Carta de intercambios activos del mes actual.</div>
              <div className={styles.parr}>Esta carta de color morado, muestra el número de intercambios activos del mes en el que se encuentre, es decir, mes a mes se actualiza este valor según la fecha en la que el usuario esté utilizando el aplicativo.</div>
              <img src="https://images.tango.us/workflows/cd1e435b-aaf9-4205-b8d6-32425cb6d66c/steps/334b0c4c-592b-493a-be41-4624965acf11/6ca2a1b4-f257-4c76-9944-72ce801f15ef.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7756&fp-y=0.7612&fp-z=2.3536&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=732&mark-y=261&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NTMmaD0yMDgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" 
               className={styles.img} />
          </div>
          <br/>
          <div className={`flex items-center text-blue-500 ${styles.subtitles}`}>
            <div>Creado con </div>
            <a href="https://tango.us?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" className="text-blue-500">
                : Tango.us
            </a>
            </div>
            <br/>
    </div>
  );
}