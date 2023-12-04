import React from "react";
import { styles } from "../../components/styles";
import { Title } from "../../components/globalComponents/Title";

export function PurchasesManual() {
  return (
    <div className='content'>
        <div>
            {<Title Title='Manual de compras'/>}
        </div>
        <div>
            <h3 className={styles.subtitles}>Acceso al módulo de compras.</h3>
            <p className={styles.parr}>Desde el menú desplegable, selecciona la opción de "Compras" para ingresar al módulo dedicado a la administración de compras.</p>
            <img src="https://images.tango.us/workflows/e9bbba10-55f1-40c7-933c-08ed3a985dca/steps/87c12c5b-df35-4d28-b3d2-6c858a325b01/9ae78306-9408-44a9-8c7b-f20f9a0b720d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.0968&fp-y=0.3554&fp-z=2.0471&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=6&mark-y=308&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NjMmaD05MSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Vista general del módulo.</h3>
            <p className={styles.parr}>En esta vista, se encontrará toda la información referente a las compras, incluyendo una tabla donde se puede ver alguna de la información que se encuentra en el sistema y los botones de las distintas acciones que se pueden realizar en este módulo.</p>
            <img src="https://images.tango.us/workflows/e9bbba10-55f1-40c7-933c-08ed3a985dca/steps/269bead0-8867-4888-b0a6-c3a88e6e418e/4090349e-4ef0-4f6c-80a1-6e3264f98e46.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Filtrado de compras.</h3>
            <p className={styles.parr}>En la parte superior izquierda, se encuentra un buscador que te permite filtrar la información de los registros de las compras, el usuario tiene que seleccionar el cuadro de búsqueda y podrá diligenciar lo que desee buscar, la tabla se comportará según las palabras relacionadas a lo que se busca.</p>
            <img src="https://images.tango.us/workflows/e9bbba10-55f1-40c7-933c-08ed3a985dca/steps/d376c01a-e032-44d5-921d-ff4e8340c3ee/37fd5713-7646-4220-8a90-18a290c23755.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1930&fp-y=0.1254&fp-z=2.5923&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=27&mark-y=286&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMDIwJmg9ODUmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Conteo de compras.</h3>
            <p className={styles.parr}>En la parte superior izquierda, debajo del buscador, se puede observar el número total de compras registradas en el sistema.</p>
            <img src="https://images.tango.us/workflows/e9bbba10-55f1-40c7-933c-08ed3a985dca/steps/ec0a165b-ab1b-4724-ba1c-71cf5f6f205a/f521e7f2-1bcb-40f7-9766-75af4734a188.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1719&fp-y=0.1432&fp-z=2.6758&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=29&mark-y=398&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yMzYmaD01MSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Configuración de la tabla.</h3>
            <p className={styles.parr}>En la parte superior derecha, justo debajo del botón de agregar, se puede configurar la tabla eligiendo el número de registros que se deseen mostrar por página. Se debe seleccionar la flecha que se encuentra al lado del número, esta desplegará tres opciones. Para seleccionar la opción, debe seleccionar el número que desee para que así la tabla se organice.</p>
            <img src="https://images.tango.us/workflows/e9bbba10-55f1-40c7-933c-08ed3a985dca/steps/ef2a2c82-a06a-483e-a79a-3989b3edd5be/9ee072d4-aabc-4383-ad96-7a1907609e8e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8648&fp-y=0.2155&fp-z=4.0000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1080&mark-y=342&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMjYmaD03NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Configuración de filtrado de la tabla.</h3>
            <p className={styles.parr}>En la parte superior derecha, se encuentra un botón denominado "Estado" que facilita el filtrado de compras según su estado. Para hacer uso de este, se debe seleccionarlo, a su vez, arrojará una lista (activos, inactivos) en la cual puede seleccionar según lo que desee visualizar en la tabla, las compras activas, las compras inactivas o ambos.</p>
            <img src="https://images.tango.us/workflows/e9bbba10-55f1-40c7-933c-08ed3a985dca/steps/c0d63f11-ad18-4ce4-a832-688a6d8076e1/b832c681-a21e-4741-8a3d-9f01acdf0f50.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8327&fp-y=0.2210&fp-z=3.5734&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=295&mark-y=302&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01MTImaD0yMjImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Informe general de compras.</h3>
            <p className={styles.parr}>Al lado derecho del botón de "Estado", se encuentra el botón para para generar un informe general de compras, el cual se denomina "Informe". Si el usuario desea generar el informe debe seleccionar este botón para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/e9bbba10-55f1-40c7-933c-08ed3a985dca/steps/f6fb224b-32b2-4613-978c-6b382ad37f0f/682a0c01-a9c0-44f4-887c-67573c904011.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8130&fp-y=0.2014&fp-z=2.8834&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=741&mark-y=261&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yMTkmaD05NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde se encuentran los campos que se requieren para generar el informe, en este caso, es la fecha de inicio y fecha de fin. En este informe, se mostrará las compras que se encuentran registradas en el intervalo de las fechas diligenciadas.</p>
            <p className={styles.parr}>El usuario debe ingresar la información en los campos y una vez terminado esto, debe seleccionar el botón azul que el cual se denomina "Confirmar" para que el sistema complete la acción de descargar el informe.</p>
            <img src="https://images.tango.us/workflows/e9bbba10-55f1-40c7-933c-08ed3a985dca/steps/755f2438-6f14-4e4c-994b-1ccb2e88a211/e2991675-f811-45b9-82fc-99102441f51f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4930&fp-y=0.5042&fp-z=2.7904&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=526&mark-y=430&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xOTUmaD05MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema en la petición, el sistema arrojará una alerta de confirmación que indica que el reporte se ha generado con éxito y el usuario podrá visualizarlo en la zona de descargas del sistema en el que se encuentra conectado.</p>
            <img src="https://images.tango.us/workflows/e9bbba10-55f1-40c7-933c-08ed3a985dca/steps/863f2969-c74f-4136-870c-e5150f8269b2/75f44b76-9c70-40d8-9520-48a5ec88ecc3.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4975&fp-y=0.1135&fp-z=3.0653&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=251&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Registro de una compra.</h3>
            <p className={styles.parr}>Al lado derecho del botón de "Informe", se encuentra el botón para agregar una nueva compra al sistema, el cual se denomina "Agregar". Si el usuario desea registrar una nueva compra debe seleccionar este botón para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/e9bbba10-55f1-40c7-933c-08ed3a985dca/steps/99cd149b-04db-444d-96dc-31eaa6c0b895/55298548-0d62-437c-973c-76e14820c688.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8607&fp-y=0.2149&fp-z=3.8834&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=871&mark-y=192&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMzMmaD0xMjgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde se encuentran los campos que se requieren para registrar una compra. Cada uno de los campos tienen sus validaciones, los campos que se encuentran con un asterisco de color rojo en el cuadro es porque estos son campos obligatorios y deben contener información.</p>
            <p className={styles.parr}>El usuario debe ingresar la información en los campos y una vez terminado esto, debe seleccionar el botón azul que el cual se denomina "Confirmar" para que el sistema complete la acción de registrar la compra.</p>
            <img src="https://images.tango.us/workflows/e9bbba10-55f1-40c7-933c-08ed3a985dca/steps/063ccea7-a643-438e-92f8-6f5fdd8db898/7d28cd6f-595a-4283-8dfd-657ab5bdc263.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=536&mark-y=630&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMDAmaD00NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema en el registro, el sistema arrojará una alerta de confirmación que indica que la compra se ha registrado con éxito y se visualizará en la tabla de los registros.</p>
            <img src="https://images.tango.us/workflows/e9bbba10-55f1-40c7-933c-08ed3a985dca/steps/bff2bc87-83d2-4b20-a962-9a31e25a186b/6a2eced0-68aa-4657-b120-202a3a7d1ac8.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4975&fp-y=0.1135&fp-z=3.0653&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=251&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Acciones en la tabla.</h3>
            <p className={styles.parr}>Al final de cada registro en la tabla, se encuentran diferentes acciones que se le pueden aplicar a cada registro, en este caso, visualizar la información de la compra, anular la compra y generar el contrato de la compra.</p>
            <img src="https://images.tango.us/workflows/e9bbba10-55f1-40c7-933c-08ed3a985dca/steps/5e9a3950-8aad-46bf-95b9-e61dd03b0e58/16bac97e-52ac-43a6-beac-1cb992ab5740.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7875&fp-y=0.3291&fp-z=2.8834&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=462&mark-y=204&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zNzQmaD0zNzgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción visualizar la información de la compra.</h3>
            <p className={styles.parr}>Si el usuario desea visualizar la información de la compra, se debe seleccionar el botón morado con un icono de un 'ojo' para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/e9bbba10-55f1-40c7-933c-08ed3a985dca/steps/3fc98c90-738f-4c4c-972a-167b07303c06/c65307a5-d04c-4cbe-ae07-cf4a4c15fb0b.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7875&fp-y=0.3291&fp-z=2.8834&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=522&mark-y=312&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NSZoPTk1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" className={styles.img}  />
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde se encuentran la información divida en tres partes, datos de la compra, datos del vehículo relacionado a la compra y datos del cliente relacionado a la compra.</p>
            <img src="https://images.tango.us/workflows/e9bbba10-55f1-40c7-933c-08ed3a985dca/steps/a9420d7a-fce2-4046-a24f-5dbb2a9718ab/e71b3a36-9437-40d0-852d-9e62141b8e1d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5078&fp-y=0.4497&fp-z=2.4461&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=2&mark-y=215&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTQ4Jmg9NDUyJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" className={styles.img}  />
            <p className={styles.parr}>Para acceder a cada una de ellas, el usuario debe seleccionar el recuadro de la información que desea visualizar, esto le desplegará la información.</p>
            <img src="https://images.tango.us/workflows/e9bbba10-55f1-40c7-933c-08ed3a985dca/steps/dea989e5-c8f4-489a-88b9-ff2e947d2b46/31c61046-47a2-4c08-bb36-def61dadf0c9.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5061&fp-y=0.4061&fp-z=1.5524&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=269&mark-y=312&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NDAmaD0yODYmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción anular la compra.</h3>
            <p className={styles.parr}>Si el usuario desea anular la compra, se debe seleccionar el botón café con un icono de equis (x) para continuar con la acción. Se debe tener en cuenta que una vez anulada la compra, no se podrá habilitar de nuevo.</p>
            <img src="https://images.tango.us/workflows/e9bbba10-55f1-40c7-933c-08ed3a985dca/steps/fd18baee-42fb-4756-a4f5-caf1c832a378/20c75a3f-c02e-43ac-8590-7fa23b5d1507.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8129&fp-y=0.3417&fp-z=3.8846&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=501&mark-y=391&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMjgmaD0xMjgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde indica si desea anular la compra, para ejecutar esto deber seleccionar el botón verde "Aceptar".</p>
            <img src="https://images.tango.us/workflows/e9bbba10-55f1-40c7-933c-08ed3a985dca/steps/ed1bf7a2-d240-45fe-bdb1-21c9eca7cb90/84ef194b-4b78-447d-af0a-c607f04af2f0.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5094&fp-y=0.4690&fp-z=2.8228&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=480&mark-y=456&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNzEmaD0xMDgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema con la anulación de la compra, el sistema arrojará una alerta la cual indica que la compra ha sido anulada con éxito.</p>
            <img src="https://images.tango.us/workflows/e9bbba10-55f1-40c7-933c-08ed3a985dca/steps/3704aa9b-06fb-4d96-a2fc-668aebda635d/649b1c5d-964b-4bdf-8119-776351c3172a.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5012&fp-y=0.1135&fp-z=3.0653&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=237&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción generar contrato de la compra.</h3>
            <p className={styles.parr}>Si el usuario desea generar el contrato de una compra, se debe seleccionar el botón morado oscuro con un icono de hoja, para continuar con la acción. Si la compra está anulada, no se podrá generar este contrato.</p>
            <img src="https://images.tango.us/workflows/e9bbba10-55f1-40c7-933c-08ed3a985dca/steps/0e2fd39a-2201-45f5-bb6f-22cf8701bccf/29f066f8-25ca-4de3-badc-4369a35089bd.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7931&fp-y=0.3574&fp-z=2.8834&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=701&mark-y=255&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NSZoPTk1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema en la petición, el sistema arrojará una alerta de confirmación que indica que el contrato de la compra se ha generado con éxito y el usuario podrá visualizarlo en la zona de descargas del sistema en el que se encuentra conectado.</p>
            <img src="https://images.tango.us/workflows/e9bbba10-55f1-40c7-933c-08ed3a985dca/steps/d1b9db8b-5b80-45cb-9c56-328cd3d986c3/a17240b6-216b-4856-8b8f-19999a238786.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4975&fp-y=0.1188&fp-z=3.0653&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=251&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNzkmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Paginación de registros.</h3>
            <p className={styles.parr}>En la parte inferior derecha de la tabla, se encuentran ubicados dos botones azules denominados "Anterior" y "Siguiente". Estos botones facilitan el desplazamiento entre las páginas de registros. Si solo hay una página, estos botones se encontrarán deshabilitados.</p>
            <img src="https://images.tango.us/workflows/e9bbba10-55f1-40c7-933c-08ed3a985dca/steps/40cfe1b4-1124-47d6-80d4-fd58c7e802e8/517e5b8e-cf13-41b8-ab22-5f95fc5b8133.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7450&fp-y=0.3340&fp-z=2.0478&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=396&mark-y=507&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz03OTgmaD01NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
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