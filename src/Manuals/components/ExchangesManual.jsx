import React from "react";
import { styles } from "../../components/styles";
import { Title } from "../../components/globalComponents/Title";

export function ExchangesManual() {
  return (
    <div className='content'>
        <div>
            {<Title Title='Manual de intercambios'/>}
        </div>

        <div>
            <h3 className={styles.subtitles}>Acceso al módulo de intercambios.</h3>
            <p className={styles.parr}>Desde el menú desplegable, selecciona la opción de "Intercambios" para ingresar al módulo dedicado a la administración de intercambios.</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/22736104-0cd4-4bb8-9657-8eee7bef3ede/f117fcad-fa45-4c44-91b8-1faafee9643c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.0968&fp-y=0.5190&fp-z=2.0471&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=6&mark-y=308&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NjMmaD05MSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Vista general del módulo.</h3>
            <p className={styles.parr}>En esta vista, se encontrará toda la información referente a los intercambios, incluyendo una tabla donde se puede ver alguna de la información que se encuentra en el sistema y los botones de las distintas acciones que se pueden realizar en este módulo.</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/8ff93167-d405-42c0-a75d-5c4f8e7966f6/cc63d3bc-a5cc-4de8-a727-cec2a59763a1.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Filtrado de intercambios.</h3>
            <p className={styles.parr}>En la parte superior izquierda, se encuentra un buscador que te permite filtrar la información de los registros de los intercambios, el usuario tiene que seleccionar el cuadro de búsqueda y podrá diligenciar lo que desee buscar, la tabla se comportará según las palabras relacionadas a lo que se busca.</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/4f3aaac6-fb47-481d-93d1-6f5b3da707a0/d207b3d5-56ac-4fee-9ae9-b2e5191c446f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1930&fp-y=0.2364&fp-z=2.5923&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=27&mark-y=206&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMDIwJmg9ODUmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Conteo de intercambios.</h3>
            <p className={styles.parr}>En la parte superior izquierda, debajo del buscador, se puede observar el número total de intercambios registrados en el sistema.</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/938a12b5-65ba-419e-9a38-dfa3c972effc/e99692b5-c928-48d7-b03e-f5c7e82b1cd0.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1950&fp-y=0.2602&fp-z=2.5710&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=26&mark-y=263&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNzQmaD00OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Configuración de la tabla.</h3>
            <p className={styles.parr}>En la parte superior derecha, justo debajo del botón de agregar, se puede configurar la tabla eligiendo el número de registros que se deseen mostrar por página. Se debe seleccionar la flecha que se encuentra al lado del número, esta desplegará tres opciones. Para seleccionar la opción, debe seleccionar el número que desee para que así la tabla se organice.</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/a7d01d39-ef42-416a-a7d9-59c03bef9e23/38175568-a5a6-459b-a3cd-332aeaa16d7e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8241&fp-y=0.2384&fp-z=3.0667&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1118&mark-y=295&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NiZoPTU2JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Configuración de filtrado de la tabla.</h3>
            <p className={styles.parr}>En la parte superior derecha, se encuentra un botón denominado "Estado" que facilita el filtrado de intercambios según su estado. Para hacer uso de este, se debe seleccionarlo, a su vez, arrojará una lista (activos, inactivos) en la cual puede seleccionar según lo que desee visualizar en la tabla, las intercambios activos, las intercambios inactivos o ambos.</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/84f8c871-ea3d-464e-b253-8930655541fe/c3b0542f-9234-43ff-a965-b91babcecd67.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8162&fp-y=0.2384&fp-z=3.5870&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=373&mark-y=268&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00OTUmaD0yMDQmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Informe general de intercambios.</h3>
            <p className={styles.parr}>Al lado derecho del botón de "Estado", se encuentra el botón para para generar un informe general de intercambios, el cual se denomina "Informe". Si el usuario desea generar el informe debe seleccionar este botón para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/ab86c0e1-6077-40f5-873d-4f358c57b86c/e7eae355-b353-42a9-a96f-79644ce67569.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8163&fp-y=0.2520&fp-z=2.8846&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=729&mark-y=158&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yMTkmaD05NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde se encuentran los campos que se requieren para generar el informe, en este caso, es la fecha de inicio y fecha de fin. En este informe, se mostrará los intercambios que se encuentran registrados en el intervalo de las fechas diligenciadas.</p>
            <p className={styles.parr}>El usuario debe ingresar la información en los campos y una vez terminado esto, debe seleccionar el botón azul que el cual se denomina "Confirmar" para que el sistema complete la acción de descargar el informe.</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/37a40b77-d407-444a-abe5-c2a6126a39ff/d9f4d300-7c33-4857-8529-0dbe2e68a281.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5013&fp-y=0.5127&fp-z=2.7912&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=498&mark-y=413&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xOTUmaD05MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema en la petición, el sistema arrojará una alerta de confirmación que indica que el reporte se ha generado con éxito y el usuario podrá visualizarlo en la zona de descargas del sistema en el que se encuentra conectado.</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/4b49feae-3b43-4504-9b80-06d42203ad2e/3a41b0ac-394b-497a-b3cd-8fceb6a12fe5.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5028&fp-y=0.1640&fp-z=3.0653&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=231&mark-y=12&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Registro de un intercambio.</h3>
            <p className={styles.parr}>Al lado derecho del botón de "Informe", se encuentra el botón para agregar un nuevo intercambio al sistema, el cual se denomina "Agregar". Si el usuario desea registrar un nuevo intercambio debe seleccionar este botón para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/494818a3-bc1d-4d6a-8378-66d5ce14463a/92d1a94b-b619-4055-99da-536b82a9bbaa.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8173&fp-y=0.2562&fp-z=2.8846&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=952&mark-y=149&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNDgmaD05NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema enviará al usuario a una nueva ventana donde se encuentran los campos que se requieren diligenciar para registrar un intercambio. Cada uno de los campos tienen sus validaciones, los campos que se encuentran con un asterisco de color rojo en el cuadro es porque estos son campos obligatorios y deben contener información. A la derecha de la página, se encuentran los datos básicos del intercambio.</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/35a6e556-11e7-4140-8e15-fc9dac1c67aa/949b61eb-6e0b-470c-b9b6-66705d0cec40.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=909&mark-y=28&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yOTAmaD01NDgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
            <p className={styles.parr}>A la izquierda de la página, se encuentra una tabla donde se muestran los vehículos que van a estar involucrados en el intercambio. Para añadir los vehículos se debe seleccionar en el campo de "Seleccionar vehículo" la placa del vehículo, también se debe seleccionar el estado al que va corresponder el vehículo en este intercambio en el campo "Estado del vehículo", este te desplegará dos opciones, "Saliente", es para los vehículos que van salir del sistema y "Entrante" para los vehículos que van a entrar nuevos al sistema.</p>
            <p className={styles.parr}>Una vez estos campos hayan sido diligenciados, el usuario debe seleccionar el botón verde denominado "Agregar".</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/0051a1ae-a696-43f6-b740-06d600bd06fa/9d8c9028-6a50-4cb6-9dea-344924045311.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=22&mark-y=153&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMDgyJmg9MTU4JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" className={styles.img}  />
            <p className={styles.parr}>Si no ocurre ningún problema en agregar el vehículo al intercambio, el sistema arrojará una alerta la cual indica que el vehículo se ha agregado al intercambio con éxito.</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/b2fc7bff-eae8-4b92-bc2f-b068138d12b2/c6ec92cd-6ed1-4253-85f4-d199d8948663.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5028&fp-y=0.2423&fp-z=2.0653&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=352&mark-y=22&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NTYmaD0xMjAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción eliminar vehículo del intercambio.</h3>
            <p className={styles.parr}>Si el usuario desea generar eliminar o desasociar el vehículo del intercambio, se debe seleccionar el botón rojo oscuro con un icono de basura, para continuar con la acción. </p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/c90ca7d5-ba96-4b3f-8c9b-84a79fc08f49/02c5eb66-260b-4387-aad1-65fa66c91b4d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6963&fp-y=0.3120&fp-z=2.8846&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=609&mark-y=292&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NSZoPTk1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema con eliminar el vehículo del intercambio, el sistema arrojará una alerta de confirmación que indica que el vehículo se ha eliminado del intercambio.</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/8670adbc-3927-42b9-980c-e832ca8b1eb4/90ddc210-f476-4878-970c-3c23cc6a7b13.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5014&fp-y=0.1656&fp-z=3.0653&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=236&mark-y=28&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNzkmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Completar la acción de registrar el intercambio.</h3>
            <p className={styles.parr}>El usuario debe ingresar la información en los campos y una vez terminado esto, debe seleccionar el botón azul que el cual se denomina "Registrar" para que el sistema complete la acción de registrar el intercambio.</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/d489025d-1e2b-4f8d-a758-51fc54d4d096/5d981525-ba56-4f46-bbf0-d1e84d2e9532.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7503&fp-y=0.7069&fp-z=2.0000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=756&mark-y=383&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNjcmaD03OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de fallo.</h3>
            <p className={styles.parr}>Si el usuario intenta registrar un intercambio sin vehículos asociados, el sistema arrojará una alerta que indica que no se puede crear el intercambio si no se tienen vehículos asociados.</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/4aa2ba5c-5caa-442e-b5df-de24d09bcf05/2698f1de-11ab-43f0-ad29-42f5ff55da02.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4830&fp-y=0.2423&fp-z=2.0653&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=401&mark-y=22&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NTYmaD0xNTQmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema con registrar el intercambio, el sistema arrojará una alerta de confirmación que indica que el intercambio se ha registrado con éxito.</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/40ba4b34-b90b-4d77-bc7d-14a77d49b805/7e542188-73cc-4987-a9ab-ae4128259ef4.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4976&fp-y=0.1640&fp-z=3.0653&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=250&mark-y=31&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
            <p className={styles.parr}>Si el usuario no desea registrar el intercambio debe seleccionar el botón rojo que el cual se denomina "Cancelar" para que el sistema complete la acción de cancelar el intercambio.</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/883c6b8a-ba68-4718-851b-6cc749da57d4/7a05b469-02ff-473c-aa9a-3d839e1c7be6.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8036&fp-y=0.5827&fp-z=2.0000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1000&mark-y=544&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNjcmaD03OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Acciones en la tabla.</h3>
            <p className={styles.parr}>Al final de cada registro en la tabla, se encuentran diferentes acciones que se le pueden aplicar a cada registro, en este caso, visualizar la información del intercambio y anular el intercambio.</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/1e19cb96-4030-4bb5-9f90-4f9757c84045/5c89b132-03b2-45b5-8a83-600ff57a7033.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8222&fp-y=0.3522&fp-z=3.1169&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=531&mark-y=160&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNjEmaD0zODAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción visualizar la información del intercambio.</h3>
            <p className={styles.parr}>Si el usuario desea visualizar la información del intercambio, se debe seleccionar el botón morado con un icono de un 'ojo' para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/841637e2-326e-4e25-a35e-e45a2d916147/5a2699e5-9532-4d6e-bb59-9e4d3f203cfa.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8386&fp-y=0.3572&fp-z=3.8846&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=468&mark-y=349&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMjgmaD0xMjgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde se encuentran la información divida en tres partes, datos del intercambio, datos de los vehículos relacionados al intercambio y datos del cliente relacionado al intercambio.</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/f09991fd-9ed2-4f9c-bf2a-491047278a57/37377540-0453-48fc-9ce6-564f817bac9c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4993&fp-y=0.4964&fp-z=2.4461&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=27&mark-y=134&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTQ4Jmg9NDUyJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" className={styles.img} />
            <p className={styles.parr}>Para acceder a cada una de ellas, el usuario debe seleccionar el recuadro de la información que desea visualizar, esto le desplegará la información.</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/1ea28230-d096-4399-8331-9b67524ee5ee/78c24ca4-d392-4149-8d4f-21adda72556b.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5003&fp-y=0.4984&fp-z=1.5533&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=280&mark-y=211&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NDEmaD0yODYmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción anular el intercambio.</h3>
            <p className={styles.parr}>Si el usuario desea anular el intercambio, se debe seleccionar el botón café con un icono de equis (x) para continuar con la acción. Se debe tener en cuenta que una vez anulado el intercambio, no se podrá habilitar de nuevo.</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/08ac5bc0-eede-4793-b3ae-89b8dd027200/f2d6dfa5-d47d-489e-b98a-201abc5d4b76.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8329&fp-y=0.3661&fp-z=3.8846&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=622&mark-y=324&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMjgmaD0xMjgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde indica si desea anular el intercambio, para ejecutar esto deber seleccionar el botón verde "Aceptar".</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/9a2af3ea-de9c-46f2-9120-2076dd0b625c/5ff7ba5b-2102-4986-bd0e-33099b505027.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4959&fp-y=0.4947&fp-z=2.8489&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=526&mark-y=407&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNzMmaD0xMDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema con la anulación del intercambio, el sistema arrojara una alerta la cual indica que el intercambio ha sido anulado con éxito.</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/f487c84e-9987-4c2f-bc6b-91d11626c8dc/901bb5b9-fa1a-4f3e-a950-68e0fef9ad3a.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4980&fp-y=0.1640&fp-z=3.0653&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=249&mark-y=31&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Paginación de registros.</h3>
            <p className={styles.parr}>En la parte inferior derecha de la tabla, se encuentran ubicados dos botones azules denominados "Anterior" y "Siguiente". Estos botones facilitan el desplazamiento entre las páginas de registros. Si solo hay una página, estos botones se encontrarán deshabilitados.</p>
            <img src="https://images.tango.us/workflows/c5b2632d-d93e-497b-8dfd-ad7183d8429e/steps/0cabf94d-bfc6-4c3b-a855-f9c6ffb26ebe/68d7378a-6c51-404c-a75b-6e53122bbfd2.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7437&fp-y=0.3682&fp-z=2.0484&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=399&mark-y=458&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz03OTgmaD01NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
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