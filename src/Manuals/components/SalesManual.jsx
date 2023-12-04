import React from "react";
import { styles } from "../../components/styles";
import { Title } from "../../components/globalComponents/Title";

export function SalesManual() {
  return (
    <div className='content'>
        <div>
            {<Title Title='Manual de ventas'/>}
        </div>

        <div>
            <h3 className={styles.subtitles}>Acceso al módulo de ventas.</h3>
            <p className={styles.parr}>Desde el menú desplegable, selecciona la opción de "Ventas" para ingresar al módulo dedicado a la administración de ventas.</p>
            <img src="https://images.tango.us/workflows/8ff0d675-67e8-4bc6-9d93-7f1423bbf542/steps/1946e1b8-4cb2-4ed6-98bc-cfaa315cddad/cc322001-652a-4c99-93e2-1a9a60f68867.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.0968&fp-y=0.4095&fp-z=2.0471&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=6&mark-y=308&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NjMmaD05MSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Vista general del módulo.</h3>
            <p className={styles.parr}>En esta vista, se encontrará toda la información referente a las ventas, incluyendo una tabla donde se puede ver alguna de la información que se encuentra en el sistema y los botones de las distintas acciones que se pueden realizar en este módulo.</p>
            <img src="https://images.tango.us/workflows/8ff0d675-67e8-4bc6-9d93-7f1423bbf542/steps/aa990835-92bb-49b3-b2cd-982283d0acea/e11f32e9-265d-4bc1-9d13-0596babd3bf4.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Filtrado de ventas.</h3>
            <p className={styles.parr}>En la parte superior izquierda, se encuentra un buscador que te permite filtrar la información de los registros de las ventas, el usuario tiene que seleccionar el cuadro de búsqueda y podrá diligenciar lo que desee buscar, la tabla se comportará según las palabras relacionadas a lo que se busca.</p>
            <img src="https://images.tango.us/workflows/8ff0d675-67e8-4bc6-9d93-7f1423bbf542/steps/aa05144e-c4b7-423a-8cac-9ebedf438740/4929c16a-11a9-484e-875c-4569b574a63f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1956&fp-y=0.1959&fp-z=2.5648&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=16&mark-y=279&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMDQyJmg9OTQmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Conteo de ventas.</h3>
            <p className={styles.parr}>En la parte superior izquierda, debajo del buscador, se puede observar el número total de ventas registradas en el sistema.</p>
            <img src="https://images.tango.us/workflows/8ff0d675-67e8-4bc6-9d93-7f1423bbf542/steps/aa19759f-c7bc-47a8-b725-74fd77b3397e/7a1f9fd3-6f5c-4b3c-9c1a-7b6dbbaa661f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1835&fp-y=0.2227&fp-z=2.7319&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=28&mark-y=330&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yMTYmaD01MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Configuración de la tabla.</h3>
            <p className={styles.parr}>En la parte superior derecha, justo debajo del botón de agregar, se puede configurar la tabla eligiendo el número de registros que se deseen mostrar por página. Se debe seleccionar la flecha que se encuentra al lado del número, esta desplegará tres opciones. Para seleccionar la opción, debe seleccionar el número que desee para que así la tabla se organice.</p>
            <img src="https://images.tango.us/workflows/8ff0d675-67e8-4bc6-9d93-7f1423bbf542/steps/62299b7d-7cf1-4ca2-9beb-dd3c93ffad72/455b7dca-3635-40d8-87b2-fd7be4348ac5.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8601&fp-y=0.2192&fp-z=3.8846&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=811&mark-y=314&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zODQmaD0xMjUmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Configuración de filtrado de la tabla.</h3>
            <p className={styles.parr}>En la parte superior derecha, se encuentra un botón denominado "Estado" que facilita el filtrado de ventas según su estado. Para hacer uso de este, se debe seleccionarlo, a su vez, arrojará una lista (activos, inactivos) en la cual puede seleccionar según lo que desee visualizar en la tabla, las ventas activas, las ventas inactivas o ambos.</p>
            <img src="https://images.tango.us/workflows/8ff0d675-67e8-4bc6-9d93-7f1423bbf542/steps/55bd2035-ac3d-4056-90b0-60fe4213d00d/1dd05a30-992b-4955-ac2e-bd0b334fda7e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8181&fp-y=0.2338&fp-z=3.5870&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=365&mark-y=280&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00OTUmaD0yMDQmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Informe general de ventas.</h3>
            <p className={styles.parr}>Al lado derecho del botón de "Estado", se encuentra el botón para para generar un informe general de ventas, el cual se denomina "Informe". Si el usuario desea generar el informe debe seleccionar este botón para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/8ff0d675-67e8-4bc6-9d93-7f1423bbf542/steps/8f200eda-50c3-4f0b-a9e1-0b8496eea715/ca63bdf1-974a-475b-87f0-6ad97d2c3fd0.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8129&fp-y=0.1959&fp-z=2.8846&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=741&mark-y=272&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yMTkmaD05NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde se encuentran los campos que se requieren para generar el informe, en este caso, es la fecha de inicio y fecha de fin. En este informe, se mostrará las ventas que se encuentran registradas en el intervalo de las fechas diligenciadas.</p>
            <p className={styles.parr}>El usuario debe ingresar la información en los campos y una vez terminado esto, debe seleccionar el botón azul que el cual se denomina "Confirmar" para que el sistema complete la acción de descargar el informe.</p>
            <img src="https://images.tango.us/workflows/8ff0d675-67e8-4bc6-9d93-7f1423bbf542/steps/cab69864-187a-4222-af71-c9f47966218e/9cfe26d0-2c3c-4f28-83a3-e90ad25fff1d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5661&fp-z=2.7921&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=503&mark-y=308&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xOTUmaD05MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema en la petición, el sistema arrojará una alerta de confirmación que indica que el reporte se ha generado con éxito y el usuario podrá visualizarlo en la zona de descargas del sistema en el que se encuentra conectado.</p>
            <img src="https://images.tango.us/workflows/8ff0d675-67e8-4bc6-9d93-7f1423bbf542/steps/6c688ccd-4ead-42f6-87d4-3aa4530970d4/c99c5237-1b26-4f38-8552-d99b38425304.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4968&fp-y=0.1218&fp-z=3.0464&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=246&mark-y=26&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02ODkmaD0yMDEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Registro de una venta.</h3>
            <p className={styles.parr}>Al lado derecho del botón de "Informe", se encuentra el botón para agregar una nueva venta al sistema, el cual se denomina "Agregar". Si el usuario desea registrar una nueva venta debe seleccionar este botón para continuar con la acción.</p>
            <img  src="https://images.tango.us/workflows/8ff0d675-67e8-4bc6-9d93-7f1423bbf542/steps/b5841cd8-f6ed-401d-a3da-8290b6116333/308da123-50d5-4454-a874-746b13056359.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8175&fp-y=0.1925&fp-z=2.8846&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=951&mark-y=279&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNDgmaD05NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img} />
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde se encuentran los campos que se requieren para registrar una venta. Cada uno de los campos tienen sus validaciones, los campos que se encuentran con un asterisco de color rojo en el cuadro es porque estos son campos obligatorios y deben contener información.</p>
            <p className={styles.parr}>El usuario debe ingresar la información en los campos y una vez terminado esto, debe seleccionar el botón azul que el cual se denomina "Confirmar" para que el sistema complete la acción de registrar la venta.</p>
            <img src="https://images.tango.us/workflows/8ff0d675-67e8-4bc6-9d93-7f1423bbf542/steps/574a5305-f712-406d-a062-fd117f0fbb60/5bcf40f4-33b0-4f01-a9c0-f6a3385c9025.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=557&mark-y=675&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMTQmaD01NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema en el registro, el sistema arrojará una alerta de confirmación que indica que la venta se ha registrado con éxito y se visualizará en la tabla de los registros.</p>
            <img src="https://images.tango.us/workflows/8ff0d675-67e8-4bc6-9d93-7f1423bbf542/steps/2ebe9c24-1b3a-4d3b-ac52-db7829f5e41c/6caf5967-8131-4139-a8c6-966d7b535edf.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4975&fp-y=0.1135&fp-z=3.0653&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=251&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Acciones en la tabla.</h3>
            <p className={styles.parr}>Al final de cada registro en la tabla, se encuentran diferentes acciones que se le pueden aplicar a cada registro, en este caso, visualizar la información de la venta, anular la venta y generar el contrato de la venta.</p>
            <img src="https://images.tango.us/workflows/8ff0d675-67e8-4bc6-9d93-7f1423bbf542/steps/4260bd28-2d1c-433c-a61f-68db24d898b4/d8342da3-7943-4fe6-b5d1-bfe30718a216.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8011&fp-y=0.3368&fp-z=3.2125&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=436&mark-y=169&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zNjkmaD0zNDUmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción visualizar la información de la venta.</h3>
            <p className={styles.parr}>Si el usuario desea visualizar la información de la venta, se debe seleccionar el botón morado con un icono de un 'ojo' para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/8ff0d675-67e8-4bc6-9d93-7f1423bbf542/steps/d07b33b0-d7f7-4376-9c31-093b3203eee9/d13a9f77-f08d-4515-981a-ec6b4fbe36d8.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7756&fp-y=0.3183&fp-z=3.8834&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=550&mark-y=328&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMjgmaD0xMjgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde se encuentran la información divida en tres partes, datos de la venta, datos del vehículo relacionado a la venta y datos del cliente relacionado a la venta.</p>
            <img src="https://images.tango.us/workflows/8ff0d675-67e8-4bc6-9d93-7f1423bbf542/steps/9796ad0e-32eb-4675-bb3a-31e2e3f00e64/f35881c3-e711-4e8c-bad1-1be6cfda3463.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5017&fp-y=0.5030&fp-z=2.4461&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=20&mark-y=123&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTQ4Jmg9NDUyJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" className={styles.img}  />
            <p className={styles.parr}>Para acceder a cada una de ellas, el usuario debe seleccionar el recuadro de la información que desea visualizar, esto le desplegará la información.</p>
            <img src="https://images.tango.us/workflows/8ff0d675-67e8-4bc6-9d93-7f1423bbf542/steps/c778b77d-fc03-4fc6-a7a5-8ecf56861068/470fd2fb-399e-419a-a355-22ce57a84c11.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=259&mark-y=239&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02ODkmaD0zMDcmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción anular la venta.</h3>
            <p className={styles.parr}>Si el usuario desea anular la venta, se debe seleccionar el botón café con un icono de equis (x) para continuar con la acción. Se debe tener en cuenta que una vez anulada la venta, no se podrá habilitar de nuevo.</p>
            <img src="https://images.tango.us/workflows/8ff0d675-67e8-4bc6-9d93-7f1423bbf542/steps/74f218bb-0f86-4535-b07b-7d76fe556c8e/94d5bed3-1129-4e76-97ad-e32dade5f866.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8100&fp-y=0.3641&fp-z=3.8834&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=515&mark-y=330&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMjgmaD0xMjgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde indica si desea anular la venta, para ejecutar esto deber seleccionar el botón verde "Aceptar".</p>
            <img src="https://images.tango.us/workflows/8ff0d675-67e8-4bc6-9d93-7f1423bbf542/steps/9657d398-1c30-426b-9210-6ca269200e6f/23c9f9ec-b155-4338-8a61-4e346c4484f0.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5020&fp-y=0.5034&fp-z=2.7788&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=155&mark-y=163&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz04NzQmaD0zNjkmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema con la anulación de la venta, el sistema arrojara una alerta la cual indica que la venta ha sido anulada con éxito.</p>
            <img src="https://images.tango.us/workflows/8ff0d675-67e8-4bc6-9d93-7f1423bbf542/steps/c7bcb87c-a688-42f1-89b2-f92da2276a28/91e08503-1e19-4acc-a10a-b15a7926cbff.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4968&fp-y=0.1218&fp-z=3.0464&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=246&mark-y=26&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02ODkmaD0yMDEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción generar contrato de la venta.</h3>
            <p className={styles.parr}>Si el usuario desea generar el contrato de una venta, se debe seleccionar el botón morado oscuro con un icono de hoja, para continuar con la acción. Si la venta está anulada, no se podrá generar este contrato.</p>
            <img src="https://images.tango.us/workflows/8ff0d675-67e8-4bc6-9d93-7f1423bbf542/steps/a5267f63-01f3-4c81-978f-ad295919248f/1fcd8da9-cab7-439f-9e1e-a78ff1b8f4d7.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8102&fp-y=0.3507&fp-z=2.8846&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=642&mark-y=268&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NSZoPTk1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema en la petición, el sistema arrojará una alerta de confirmación que indica que el contrato de la venta se ha generado con éxito y el usuario podrá visualizarlo en la zona de descargas del sistema en el que se encuentra conectado.</p>
            <img src="https://images.tango.us/workflows/8ff0d675-67e8-4bc6-9d93-7f1423bbf542/steps/1f09512d-f9f8-4e88-bd93-41e13de157e3/ea68f369-9f10-40a6-b4b2-0b8bd9d6ee4a.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4975&fp-y=0.1188&fp-z=3.0653&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=251&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNzkmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div><h3 className={styles.subtitles}>Paginación de registros.</h3>
            <p className={styles.parr}>En la parte inferior derecha de la tabla, se encuentran ubicados dos botones azules denominados "Anterior" y "Siguiente". Estos botones facilitan el desplazamiento entre las páginas de registros. Si solo hay una página, estos botones se encontrarán deshabilitados.</p>
            <img src="https://images.tango.us/workflows/8ff0d675-67e8-4bc6-9d93-7f1423bbf542/steps/2309c20f-2068-4ddb-9cea-6c9fb0940fd0/2e9ca46e-51dd-43b3-9d21-e1c9611eea43.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7422&fp-y=0.4162&fp-z=2.0484&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=403&mark-y=388&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz03OTgmaD01NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
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