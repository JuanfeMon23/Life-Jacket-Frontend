import React from "react";
import { styles } from "../../components/styles";
import { Title } from "../../components/globalComponents/Title";

export function VehiclesManual() {
  return (
    <div className='content'>
        <div>
            {<Title Title='Manual de vehículos'/>}
        </div>
        <div>
            <h3 className={styles.subtitles}>Acceso al módulo de vehículos. (GESTIÓN DE VEHÍCULOS)</h3>
            <p className={styles.parr}>Desde el menú desplegable, selecciona la opción de "Vehículos". La cual también desplegara dos opciones.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/bd54a247-2fc2-4b4e-ab07-0385b6952982/a71c7172-805d-4f6b-992b-5c0763b95714.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.0968&fp-y=0.3001&fp-z=2.0471&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=6&mark-y=308&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NjMmaD05MSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}/>
            <p className={styles.parr}>Si el usuario desea ingresar a la información relacionada a la gestión de vehículos, debe seleccionar "Gestión de vehículos"</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/10aa9ca0-08ed-4241-b5fc-9f3a51fbcdc4/e16691cf-3ba9-464a-b00d-8fe37d104e10.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1022&fp-y=0.3088&fp-z=2.4021&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=127&mark-y=300&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMzUmaD0xMDcmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Vista general del módulo de gestión de vehículos.</h3>
            <p className={styles.parr}>En esta vista, se encontrará toda la información referente a los vehículos, incluyendo una tabla donde se puede ver alguna de la información que se encuentra en el sistema y los botones de las distintas acciones que se pueden realizar en este módulo.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/fd030595-63cf-48d6-be70-18c520673201/79fd9898-07bf-49f8-99cf-2a36d73732b1.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n"  className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Filtrado de vehículos.</h3>
            <p className={styles.parr}>En la parte superior izquierda, se encuentra un buscador que te permite filtrar la información de los registros de los vehículos, el usuario tiene que seleccionar el cuadro de búsqueda y podrá diligenciar lo que desee buscar, la tabla se comportará según las palabras relacionadas a lo que se busca.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/062a3fa1-8cca-4c9b-9141-960deb50b3d7/ca31d10e-db1e-465b-abf9-5d06575afdaa.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1880&fp-y=0.2434&fp-z=2.6590&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=31&mark-y=185&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMDY4Jmg9OTYmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"  className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Conteo de vehículos.</h3>
            <p className={styles.parr}>En la parte superior izquierda, debajo del buscador, se puede observar el número total de vehículos registrados en el sistema.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/2d2e66e1-c665-482e-ade6-db81319170e5/19926e47-8adf-4734-bcf4-18b3bddb3407.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1138&fp-y=0.2547&fp-z=3.6590&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=39&mark-y=239&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMzQmaD03MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Configuración de la tabla.</h3>
            <p className={styles.parr}>En la parte superior derecha, justo debajo del botón de agregar, se puede configurar la tabla eligiendo el número de registros que se deseen mostrar por página. Se debe seleccionar la flecha que se encuentra al lado del número, esta desplegará tres opciones. Para seleccionar la opción, debe seleccionar el número que desee para que así la tabla se organice.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/69c5cb61-e3d1-4b65-abe1-5a0cfe3d7698/37ade265-c4dc-448f-af59-763d38037ae2.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8274&fp-y=0.2362&fp-z=3.0710&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1107&mark-y=300&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NyZoPTU3JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Configuración de filtrado de la tabla.</h3>
            <p className={styles.parr}>En la parte superior derecha, se encuentra un botón denominado "Estado" que facilita el filtrado de vehículos según su estado. Para hacer uso de este, se debe seleccionarlo, a su vez, arrojará una lista (activos, inactivos) en la cual puede seleccionar según lo que desee visualizar en la tabla, los vehículos activos, los vehículos inactivos o ambos.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/9790c7fd-d106-4fd3-88d5-82ffcf988ba6/a010971f-bc48-4ad3-9013-9ffb0437d6da.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8483&fp-y=0.2425&fp-z=3.5819&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=510&mark-y=247&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01MTQmaD0yMjImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Registro de un vehículo.</h3>
            <p className={styles.parr}>Al lado derecho del botón de "Estado", se encuentra el botón para agregar un nuevo vehículo al sistema, el cual se denomina "Agregar". Si el usuario desea registrar un nuevo vehículo debe seleccionar este botón para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/08cf7aa2-abc5-4dcd-bfb6-c64c18b3e5a3/326460c9-b803-4fb3-9648-ef8426d0e7a7.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8614&fp-y=0.2131&fp-z=3.8886&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=868&mark-y=197&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMzQmaD0xMjgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde se encuentran los campos que se requieren para registrar un vehículo. Cada uno de los campos tienen sus validaciones, los campos que se encuentran con un asterisco de color rojo en el cuadro es porque estos son campos obligatorios y deben contener información. El usuario debe ingresar la información en los campos y una vez terminado esto, debe seleccionar el botón azul que el cual se denomina "Confirmar" para que el sistema complete la acción de registrar el vehículo.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/12c9a371-1237-42a5-85f9-417e1e9f5e21/f01f2d71-0be5-4128-8ab6-c70aa0d9ff36.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4963&fp-y=0.7040&fp-z=2.0000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=513&mark-y=586&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNDAmaD02NiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"  className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de fallo.</h3>
            <p className={styles.parr}>Si el placa del vehículo que ingresó se encuentra ya registrado y activo, el sistema arrojará la alerta donde indica que el vehículo con esta placa ya está registrado y activo y no dejara que se registre.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/768b4594-4146-4643-95d7-b555b9cf89e4/b6e65eb3-b3be-4467-8c0d-8937bf181a21.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4970&fp-y=0.1179&fp-z=3.0657&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=253&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNzkmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"  className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema en el registro, el sistema arrojará una alerta de confirmación que indica que el vehículo se ha registrado con éxito y se visualizará en la tabla de los registros.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/45512c3f-4c27-4578-a77b-a4a11e6b42ad/4480df91-bfde-46f2-adff-107e56cb859b.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4969&fp-y=0.1206&fp-z=3.0468&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=246&mark-y=26&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02ODkmaD0yMDEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Información de soat y tecnomecánica.</h3>
            <p className={styles.parr}>En la tabla se podrá visualizar los campos de soat y tecnomecánica, estos dos campos son fechas que son importantes en un vehículo. Si se muestran con un logo en verde es porque las fechas aún no han caducado a la fecha en que se visualizan. Si el logo está en rojo es porque la fecha ya está por debajo de la actual, es decir, ya caducó.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/1b8add6a-5fc0-4c00-980b-bea83f931219/97ed8caf-e09c-4bbb-abcf-0d104cd403b8.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3739&fp-y=0.4017&fp-z=2.6635&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=426&mark-y=173&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zNDkmaD0zNzgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"  className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Acciones en la tabla.</h3>
            <p className={styles.parr}>Al final de cada registro en la tabla, se encuentran diferentes acciones que se le pueden aplicar a cada registro, en este caso, visualizar la información del vehículo, editar alguna de la información del vehículo, inhabilitar o habilitar el vehículo y eliminar el vehículo.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/08e5dbf6-67b6-4dc5-9f1f-7e9b65871609/cc7cd9cc-04cc-4c15-abc3-26f2d93036e7.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7001&fp-y=0.4323&fp-z=1.8886&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=532&mark-y=131&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMDMmaD0zMzImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"  className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción visualizar la información del vehículo.</h3>
            <p className={styles.parr}>Si el usuario desea visualizar la información de un vehículo, se debe seleccionar el botón morado con un icono de un 'ojo' para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/2f2c943d-2fe2-425e-830d-d3d1204adf13/11bc793f-4ea2-4c25-95c2-0703999cbd20.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6873&fp-y=0.3479&fp-z=2.8886&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=574&mark-y=274&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NSZoPTk1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" className={styles.img}/>
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde se encuentran la información divida en tres partes, datos principales, datos físicos y datos legales.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/f41690af-a0d8-46a6-b524-6544aad3e2df/4d143f6f-b708-46e5-9c13-03581c9b21a9.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4994&fp-y=0.4974&fp-z=2.4469&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=27&mark-y=132&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTQ4Jmg9NDUyJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"  className={styles.img}/>
            <p className={styles.parr}>Para acceder a cada una de ellas, el usuario debe seleccionar el recuadro de la información que desea visualizar, esto le desplegará la información.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/91aff675-4bd0-4222-b7f9-43d4e760d441/c6446d80-267e-440b-8a78-9a68e4b2b9bf.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5003&fp-y=0.4989&fp-z=1.5533&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=280&mark-y=171&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NDEmaD0zNjYmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción editar la información del vehículo.</h3>
            <p className={styles.parr}>Si el usuario desea editar la información de un vehículo, se debe seleccionar el botón naranja con un icono de un 'lápiz' para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/981d4fb5-9125-4ad9-9207-4b3a41fa2f62/480a3f37-8579-4618-ac86-779ccaedc856.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7211&fp-y=0.4729&fp-z=2.8853&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=552&mark-y=306&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NSZoPTk1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" className={styles.img}/>
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde se encuentran los campos que se pueden editar de un vehículo. Cada uno de los campos tienen sus validaciones, los campos que se encuentran con un asterisco de color rojo en el cuadro es porque estos son campos obligatorios y deben contener información. El usuario debe cambiar la información a campos en los que desea actualizar la información.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/1cf823f6-6ead-4adb-aedb-1fcccde0cdc5/ea875e91-db8f-47ef-ae81-6d2ce7c1dedc.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=442&mark-y=55&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0zMTcmaD02MDgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"  className={styles.img}/>
            <p className={styles.parr}>Seguido de esto, debe seleccionar el botón azul que el cual se denomina "Confirmar" para que el sistema complete la acción de editar la información del vehículo.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/190f9f72-fdee-4b28-876a-ab1d48dbeb0a/b31ab812-2f95-4841-a430-39e16de742aa.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.8749&fp-z=2.7921&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=503&mark-y=414&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xOTUmaD05MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"  className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema en la actualización de la información, el sistema arrojará una alerta de confirmación que indica que el vehículo se ha actualizado con éxito.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/cc30e22f-02cd-41f8-b84f-9cd1afc34ea0/1bb0734c-3b11-452a-9823-d8bd8ddfb7fb.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4970&fp-y=0.1128&fp-z=3.0657&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=253&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción inhabilitar o habilitar el vehículo.</h3>
            <p className={styles.parr}>Si el usuario desea deshabilitar un vehículo, se debe seleccionar el botón café con un icono de equis (x) para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/f68fd6d6-6da3-4fba-a2d8-79d3e48d1be9/cf86ffbb-c921-408c-a829-fbb2831da11f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7486&fp-y=0.4729&fp-z=2.8853&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=552&mark-y=306&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NSZoPTk1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" className={styles.img}/>
            <p className={styles.parr}>Si el usuario desea habilitar un vehículo, se debe seleccionar el botón verde con un icono de signo (✔) para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/1d38286c-a349-4ebb-828d-f05f9ee0db8f/d33ed9a4-00ee-4c9e-9de3-3898fdd56a51.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7481&fp-y=0.4663&fp-z=3.8886&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=556&mark-y=308&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMjgmaD0xMjgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"  className={styles.img}/>
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde indica si desea "inhabilitar" o "habilitar" el vehículo, según lo que se desee hacer, para ejecutar esto deber seleccionar el botón verde "Aceptar".</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/7885ff5e-c3ae-4b1b-b73b-c6bbf5014398/a876e9da-c059-4b5b-9b1c-3cc20474c6e4.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4994&fp-y=0.5466&fp-z=2.8496&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=514&mark-y=303&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNzMmaD0xMDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"  className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema con la actualización del estado del vehículo, el sistema arrojara una alerta la cual indica que el estado ha sido actualizado con éxito.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/cd5bb920-4b3c-4529-94b4-d4e759190ac0/56a38944-08d0-49c7-9360-03aecd6b9ef9.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4970&fp-y=0.1128&fp-z=3.0657&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=253&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"  className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción eliminar el vehículo.</h3>
            <p className={styles.parr}>Si el usuario desea eliminar un vehículo del sistema, se debe seleccionar el botón rojo con un icono de basura, para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/40b74f53-06e9-4aaa-806e-2d8f9de66adc/32b63c04-aa12-4c76-be26-84a939f84086.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7727&fp-y=0.4759&fp-z=3.8886&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=572&mark-y=282&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMjgmaD0xMjgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}/>
            <p className={styles.parr}>Si el usuario intenta eliminar un vehículo el cual tiene compras, ventas o cambios asociados, el sistema le arrojará una alerta la cual indica que no se puede eliminar un vehículo con compras, ventas o cambios asociados, por temas de seguridad y conservación de la información.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/ebb64274-3021-48da-b033-346b19e5c0b7/bec59387-bc88-4975-a1f6-4729a118721f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4929&fp-y=0.1272&fp-z=3.1421&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=276&mark-y=53&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02MjkmaD0yMDAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"  className={styles.img}/>
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde indica si desea eliminar el vehículo, para ejecutar esto deber seleccionar el botón verde "Aceptar".</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/a34bc1c1-0296-470a-bfb9-0edb17ad03cc/b38146c1-d6df-48f9-8cd3-849b618d45b8.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4994&fp-y=0.5466&fp-z=2.8496&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=514&mark-y=303&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNzMmaD0xMDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema con la eliminación del vehículo, el sistema arrojara una alerta la cual indica que el vehículo ha sido eliminado con éxito.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/3277fea3-73f5-46a0-bac5-7714e23b073b/144bd82f-c3f5-46ed-8a8c-222888a497ae.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5035&fp-y=0.1128&fp-z=3.0657&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=229&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Paginación de registros.</h3>
            <p className={styles.parr}>En la parte inferior derecha de la tabla, se encuentran ubicados dos botones azules denominados "Anterior" y "Siguiente". Estos botones facilitan el desplazamiento entre las páginas de registros. Si solo hay una página, estos botones se encontrarán deshabilitados.</p>
            <img src="https://images.tango.us/workflows/0ecb61af-b80d-4600-ba3d-d333b1e6b91f/steps/f5966536-a217-479f-ad9d-b2f518b70552/a48a5dce-cb6d-4c42-b41f-bf3b359c1c33.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7453&fp-y=0.4589&fp-z=2.0488&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=395&mark-y=394&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz03OTgmaD01NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}/>
        </div>

        <br />

        <div>
            <h3 className={styles.subtitles}>Acceso al módulo de vehículos. (GESTIÓN DE MARCAS)</h3>
            <p className={styles.parr}>Si el usuario desea ingresar a la información relacionada a la gestión de las marcas de los vehículos, debe seleccionar "Gestión de marcas"</p>
            <img src="https://images.tango.us/workflows/09d9acdf-c022-4978-9482-26911411d482/steps/073fdb0f-e94e-464b-b1e8-ca049b7cf77c/4e086b24-00bc-43fd-899e-1766d6592492.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1022&fp-y=0.3716&fp-z=2.4021&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=127&mark-y=300&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMzUmaD0xMDcmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"  className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Vista general del módulo de gestión de marcas.</h3>
            <p className={styles.parr}>En esta vista, se encontrará toda la información referente a las marcas de los vehículos, incluyendo una tabla donde se puede ver alguna de la información que se encuentra en el sistema y los botones de las distintas acciones que se pueden realizar en este módulo.</p>
            <img src="https://images.tango.us/workflows/09d9acdf-c022-4978-9482-26911411d482/steps/2c92d941-44ed-4206-8173-f0906b376690/6dc18494-b2f1-407b-af53-965f612cabdc.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Filtrado de las marcas.</h3>
            <p className={styles.parr}>En la parte superior izquierda, se encuentra un buscador que te permite filtrar la información de los registros de las marcas los vehículos, el usuario tiene que seleccionar el cuadro de búsqueda y podrá diligenciar lo que desee buscar, la tabla se comportará según las palabras relacionadas a lo que se busca.</p>
            <img src="https://images.tango.us/workflows/09d9acdf-c022-4978-9482-26911411d482/steps/1465950c-eae6-4848-9fb5-ca75bf0155be/668384fa-f542-40d3-b678-33cc27a1f58a.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1907&fp-y=0.1407&fp-z=2.5927&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=28&mark-y=286&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMDIwJmg9ODUmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Conteo de marcas.</h3>
            <p className={styles.parr}>En la parte superior izquierda, debajo del buscador, se puede observar el número total de marcas registradas en el sistema.</p>
            <img src="https://images.tango.us/workflows/09d9acdf-c022-4978-9482-26911411d482/steps/eb9f880a-d339-48c2-9ed5-e114e25f52c9/3d2a6a2a-a17a-40da-b122-166e0f5ac35f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1687&fp-y=0.2516&fp-z=2.6590&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=29&mark-y=276&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNDMmaD01MSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Configuración de la tabla.</h3>
            <p className={styles.parr}>En la parte superior derecha, justo debajo del botón de agregar, se puede configurar la tabla eligiendo el número de registros que se deseen mostrar por página. Se debe seleccionar la flecha que se encuentra al lado del número, esta desplegará tres opciones. Para seleccionar la opción, debe seleccionar el número que desee para que así la tabla se organice.</p>
            <img src="https://images.tango.us/workflows/09d9acdf-c022-4978-9482-26911411d482/steps/435d75a7-de9c-413a-a463-2b994edc587c/2ce2761a-b469-4f57-8425-c0a160efe379.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8268&fp-y=0.1875&fp-z=3.0710&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1109&mark-y=406&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NyZoPTU3JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"  className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Registro de una línea.</h3>
            <p className={styles.parr}>Al lado derecho superior, se encuentra el botón para agregar una nueva línea al sistema, el cual se denomina "Agregar". Si el usuario desea registrar una nueva línea debe seleccionar este botón para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/09d9acdf-c022-4978-9482-26911411d482/steps/9b3fd6d5-d687-49f5-9a79-98e5451a7cf6/b359a48f-6c4a-44f8-a6c3-a78dfbc5f1a8.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8176&fp-y=0.1861&fp-z=2.8886&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=960&mark-y=292&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNDQmaD05NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"  className={styles.img}/>
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde se encuentran los campos que se requieren para registrar una línea de un vehículo. Cada uno de los campos tienen sus validaciones, los campos que se encuentran con un asterisco de color rojo en el cuadro es porque estos son campos obligatorios y deben contener información.</p>
            <p className={styles.parr}>El usuario debe ingresar la información en los campos y una vez terminado esto, debe seleccionar el botón azul que el cual se denomina "Confirmar" para que el sistema complete la acción de registrar la línea.</p>
            <img src="https://images.tango.us/workflows/09d9acdf-c022-4978-9482-26911411d482/steps/37adbb4f-c384-4ecf-9f75-f8f6d22c1c66/0a4aa82f-c8cb-41cd-bafe-3a3fa1d3ade0.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5006&fp-y=0.4553&fp-z=2.7918&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=501&mark-y=666&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xOTUmaD05MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"  className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema en el registro, el sistema arrojará una alerta de confirmación que indica que la marca con la línea se ha registrado con éxito y se visualizará en la tabla de los registros.</p>
            <img src="https://images.tango.us/workflows/09d9acdf-c022-4978-9482-26911411d482/steps/8283ed96-fd8f-41c7-89a6-1482d995fc73/fd3b2388-1992-49b5-856d-a31b2cc935a6.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4928&fp-y=0.1167&fp-z=3.0647&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=268&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"  className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción eliminar el registro.</h3>
            <p className={styles.parr}>Si el usuario desea eliminar una línea, se debe seleccionar el botón rojo con un icono de basura, para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/09d9acdf-c022-4978-9482-26911411d482/steps/6b70833d-1a8c-43ce-a692-ba9a32319df4/d07cf403-74fd-467f-aed5-cea9606e86de.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7271&fp-y=0.3044&fp-z=2.8834&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=501&mark-y=363&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NSZoPTk1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" className={styles.img}/>
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde indica si desea eliminar el registro, para ejecutar esto deber seleccionar el botón verde "Aceptar".</p>
            <img src="https://images.tango.us/workflows/09d9acdf-c022-4978-9482-26911411d482/steps/383578a5-275a-4905-b44f-ed2e5eeba98b/9f5191e2-8c37-4d66-9cbd-6c4958958c24.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4960&fp-y=0.4856&fp-z=2.8216&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=526&mark-y=423&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNzEmaD0xMDgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema con la eliminación del registro, el sistema arrojara una alerta la cual indica que la línea ha sido eliminada con éxito.</p>
            <img src="https://images.tango.us/workflows/09d9acdf-c022-4978-9482-26911411d482/steps/91724c8d-ccd8-4479-b667-99782c068053/8bbce3e9-082b-4ef3-a2a0-71f0b5025274.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4970&fp-y=0.0994&fp-z=3.0647&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=253&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Paginación de registros.</h3>
            <p className={styles.parr}>En la parte inferior derecha de la tabla, se encuentran ubicados dos botones azules denominados "Anterior" y "Siguiente". Estos botones facilitan el desplazamiento entre las páginas de registros. Si solo hay una página, estos botones se encontrarán deshabilitados.</p>
            <img src="https://images.tango.us/workflows/09d9acdf-c022-4978-9482-26911411d482/steps/19d21541-21df-49a0-b169-75d54855458c/9436d8ad-6015-4162-bbf4-5199ff72b73e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7462&fp-y=0.5775&fp-z=2.0488&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=393&mark-y=696&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz03OTgmaD01NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img} />
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