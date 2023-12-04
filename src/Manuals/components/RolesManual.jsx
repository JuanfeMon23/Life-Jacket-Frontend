import React from "react";
import { styles } from "../../components/styles";
import { Title } from "../../components/globalComponents/Title";

export function RolesManual() {
  return (
    <div className='content'>
        <div>
            {<Title Title='Manual de roles'/>}
        </div>

        <div>
            <h3 className={styles.subtitles}>Acceso al módulo de roles.</h3>
            <p className={styles.parr}>Desde el menú desplegable, selecciona la opción de "Roles" para ingresar al módulo dedicado a la administración de roles.</p>
            <img src="https://images.tango.us/workflows/27e8d78b-6177-404f-a584-5b384e3bd135/steps/3578f2ad-440e-4bc8-9443-b27ec7ece8af/75b494c5-6f31-4707-a8c6-d2941b29beea.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.2452&fp-y=0.2441&fp-z=2.0458&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=4&mark-y=232&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NjMmaD05MSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Vista general del módulo.</h3>
            <p className={styles.parr}>En esta vista, se encontrará toda la información referente a los roles, incluyendo una tabla donde se puede ver alguna de la información que se encuentra en el sistema y los botones de las distintas acciones que se pueden realizar en este módulo.</p>
            <img src="https://images.tango.us/workflows/27e8d78b-6177-404f-a584-5b384e3bd135/steps/aa563f1c-df72-4d31-81a1-06308d120f34/5c986680-c371-4e12-93f7-80c0e1c98810.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Filtrado de roles.</h3>
            <p className={styles.parr}>En la parte superior izquierda, se encuentra un buscador que te permite filtrar la información de los registros de los roles, el usuario tiene que seleccionar el cuadro de búsqueda y podrá diligenciar lo que desee buscar, la tabla se comportará según las palabras relacionadas a lo que se busca.</p>
            <img src="https://images.tango.us/workflows/27e8d78b-6177-404f-a584-5b384e3bd135/steps/2cb2e00b-e59e-497e-b3bf-268e994e38f8/6e06cbd4-31f1-49b3-9708-189ecdb465b6.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1935&fp-y=0.2008&fp-z=2.5927&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=26&mark-y=272&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMDIwJmg9ODUmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Conteo de roles.</h3>
            <p className={styles.parr}>En la parte superior izquierda, debajo del buscador, se puede observar el número total de roles registrados en el sistema.</p>
            <img src="https://images.tango.us/workflows/27e8d78b-6177-404f-a584-5b384e3bd135/steps/79674d61-13f8-4e5b-be4d-fc1c946fc545/96cb90ec-16d9-4871-97c7-41cb4985ebff.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.0390&fp-y=0.2237&fp-z=2.7773&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=30&mark-y=327&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yMDAmaD01MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Configuración de la tabla.</h3>
            <p className={styles.parr}>En la parte superior derecha, justo debajo del botón de agregar, se puede configurar la tabla eligiendo el número de registros que se deseen mostrar por página. Se debe seleccionar la flecha que se encuentra al lado del número, esta desplegará tres opciones. Para seleccionar la opción, debe seleccionar el número que desee para que así la tabla se organice.</p>
            <img src="https://images.tango.us/workflows/27e8d78b-6177-404f-a584-5b384e3bd135/steps/4bcc72a8-0fab-481a-94c3-ab2ed16b7955/4159fb5e-baa1-4e20-8d16-e73ffed34d99.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8268&fp-y=0.1581&fp-z=3.0710&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1109&mark-y=459&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NyZoPTU3JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Configuración de filtrado de la tabla.</h3>
            <p className={styles.parr}>En la parte superior derecha, se encuentra un botón denominado "Estado" que facilita el filtrado de roles según su estado. Para hacer uso de este, se debe seleccionarlo, a su vez, arrojará una lista (activos, inactivos) en la cual puede seleccionar según lo que desee visualizar en la tabla, los roles activos, los roles inactivos o ambos.</p>
            <img src="https://images.tango.us/workflows/27e8d78b-6177-404f-a584-5b384e3bd135/steps/eb27385d-1ec3-4d7b-b8ab-14091f82bebd/d8b7b50e-9b7f-4297-a934-83a122efbaa5.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8493&fp-y=0.1851&fp-z=3.5819&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=506&mark-y=393&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01MTQmaD0yMjImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Registro de un rol.</h3>
            <p className={styles.parr}>Al lado derecho del botón de "Estado", se encuentra el botón para agregar un nuevo rol al sistema, el cual se denomina "Agregar". Si el usuario desea registrar un nuevo rol debe seleccionar este botón para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/27e8d78b-6177-404f-a584-5b384e3bd135/steps/031f2d3d-9d38-42e3-9bf6-e88fa61e9163/50fbf445-7a21-4efe-b272-f2fdc8cfb757.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8614&fp-y=0.1843&fp-z=3.8886&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=868&mark-y=276&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMzQmaD0xMjgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde se encuentran los campos que se requieren para registrar un rol, en este caso, el nombre del rol. Los campos que se encuentran con un asterisco de color rojo en el cuadro es porque estos son campos obligatorios y deben contener información.</p>
            <p className={styles.parr}>El usuario debe ingresar la información en los campos y una vez terminado esto, debe seleccionar el botón azul que el cual se denomina "Confirmar" para que el sistema complete la acción de registrar el rol.</p>
            <img src="https://images.tango.us/workflows/27e8d78b-6177-404f-a584-5b384e3bd135/steps/89504cfa-9c8f-4588-a873-a904e45b3174/ecd2b7d2-bc0f-4fa3-a787-35a72a6e7f12.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5036&fp-y=0.5106&fp-z=2.7918&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=491&mark-y=398&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xOTUmaD05MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de fallo.</h3>
            <p className={styles.parr}>Este campo cuenta con validaciones y si el nombre que ingresó se encuentra ya registrado, el sistema arrojará la alerta donde indica que el nombre ya se encuentra registrado en el sistema y no dejara que se registre.</p>
            <img src="https://images.tango.us/workflows/27e8d78b-6177-404f-a584-5b384e3bd135/steps/99f77fb3-49f8-48f7-bcbd-3681fc97fc74/d2343e62-9b1f-49e3-9ea1-6a721ff73aa5.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4951&fp-y=0.1645&fp-z=3.0458&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=252&mark-y=25&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02ODkmaD0yMDEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema en el registro, el sistema arrojará una alerta de confirmación que indica que el rol se ha registrado con éxito y se visualizará en la tabla de los registros.</p>
            <img src="https://images.tango.us/workflows/27e8d78b-6177-404f-a584-5b384e3bd135/steps/c457ecaf-55c6-4230-a85b-09be75246e4c/19d40218-44eb-4b79-8864-893cb7904175.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4976&fp-y=0.1108&fp-z=3.0657&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=250&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Acciones en la tabla.</h3>
            <p className={styles.parr}>Al final de cada registro en la tabla, se encuentran diferentes acciones que se le pueden aplicar a cada registro, en este caso, añadir permisos al rol y eliminar el rol.</p>
            <img src="https://images.tango.us/workflows/27e8d78b-6177-404f-a584-5b384e3bd135/steps/633c220b-27a6-4895-950a-04334d3a73d5/e5126e41-1e54-4f8e-95d5-6f02d4a63900.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8074&fp-y=0.3500&fp-z=2.8886&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=661&mark-y=181&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMTImaD00MjEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción añadir permisos a un rol.</h3>
            <p className={styles.parr}>Si el usuario desea añadirle permisos a un rol que no posee ningún permiso, se debe seleccionar el botón azul con un icono de más (+) para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/27e8d78b-6177-404f-a584-5b384e3bd135/steps/83b64ddb-d57a-490e-9402-7b2b673e3710/0b28d7cd-987d-49cc-91c8-57d8d260703e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8557&fp-y=0.3445&fp-z=3.8886&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=540&mark-y=515&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMjgmaD0xMjgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde se encuentra la lista de permisos que se le pueden asignar al rol. Para seleccionar un permiso, se selecciona el cuadro que se encuentra al lado del permiso, si se selecciona el permiso el cuadro va a cambiar a color verde, indicando que se ha seleccionado, esto se debe realizar con cada uno de los permisos que se deseen asignar.  </p>
            <p className={styles.parr}>Una vez terminado esto, debe seleccionar el botón azul que el cual se denomina "Confirmar" para que el sistema complete la acción de asignarle los permisos al rol.</p>
            <img src="https://images.tango.us/workflows/27e8d78b-6177-404f-a584-5b384e3bd135/steps/5bfbbfdf-a56c-46dc-965a-5e582eacd100/194b9981-d0c9-4759-85c0-7fbf1b8d4887.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4953&fp-y=0.4620&fp-z=2.7918&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=518&mark-y=625&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xOTUmaD05MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema con la asignación de los permisos, el sistema arrojará una alerta de confirmación que indica que los permisos se han asignado con éxito.</p>
            <img src="https://images.tango.us/workflows/27e8d78b-6177-404f-a584-5b384e3bd135/steps/4c07f803-14ba-4aa6-9be0-4261c7878494/05d2a6c4-5d75-4c64-8d84-b43139cd6eb6.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4987&fp-y=0.1542&fp-z=3.0000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=254&mark-y=32&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NjImaD0xNTAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción eliminar un rol.</h3>
            <p className={styles.parr}>Una vez asignados los permisos a un rol, estos no se podrán modificar, el botón de asignar permisos aparecerá inhabilitado.</p>
            <img src="https://images.tango.us/workflows/27e8d78b-6177-404f-a584-5b384e3bd135/steps/115dae9a-7df5-4eb5-8f3b-cdccd5c13fbf/35a3d7b6-275d-4a27-8fca-c4a288312d1e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8439&fp-y=0.4150&fp-z=3.8886&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=598&mark-y=327&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMjgmaD0xMjgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción eliminar un rol.</h3>
            <p className={styles.parr}>Si el usuario desea eliminar un rol, se debe seleccionar el botón rojo con un icono de basura, para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/27e8d78b-6177-404f-a584-5b384e3bd135/steps/6db4de9f-53c1-4190-bc40-6fb640b5b44c/01e91277-247f-47f5-9894-021c575f18b6.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8576&fp-y=0.4238&fp-z=3.8886&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=662&mark-y=297&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMjgmaD0xMjgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde indica si desear eliminar el rol, para ejecutar esto deber seleccionar el botón verde "Aceptar".</p>
            <img src="https://images.tango.us/workflows/27e8d78b-6177-404f-a584-5b384e3bd135/steps/53b7d6bd-b1e1-4817-96f3-f19faf2dbc0d/1ca055be-ecbe-4cd8-a4b8-3e619246fcee.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.4768&fp-z=2.8268&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=512&mark-y=440&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNzEmaD0xMDgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alertas de fallo.</h3>
            <p className={styles.parr}>Si el usuario intenta eliminar el rol que tiene como nombre administrador, no podrá ya que le arrojara una alerta la cual indica que no se puede eliminar el rol de administrador, por temas de seguridad.</p>
            <img src="https://images.tango.us/workflows/27e8d78b-6177-404f-a584-5b384e3bd135/steps/2415e5eb-9471-44e4-b164-5b72ef3a0123/d51c986e-4609-4aaf-863b-1d564df04c21.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4964&fp-y=0.1209&fp-z=3.0657&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=255&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNzkmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
            <p className={styles.parr}>A su vez, si el usuario intenta eliminar un rol el cual ya esta asignado para algún usuario del sistema, no se podrá eliminar y el sistema arrojara una alerta indicando que no se puede eliminar un rol con usuarios asociados.</p>
            <img src="https://images.tango.us/workflows/27e8d78b-6177-404f-a584-5b384e3bd135/steps/2416bc21-cc2c-4840-a506-03d683b6430b/34f395b7-be1f-4c48-9998-cd6552232abf.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4970&fp-y=0.1179&fp-z=3.0657&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=253&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNzkmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema con la eliminación del rol, el sistema arrojara una alerta la cual indica que el rol ha sido eliminado con éxito.</p>
            <img src="https://images.tango.us/workflows/27e8d78b-6177-404f-a584-5b384e3bd135/steps/4f403121-8fe4-4a39-b263-1ad3d28c03bd/97a08821-8173-4f72-bdc2-1119e1694fab.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4970&fp-y=0.1128&fp-z=3.0657&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=253&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Paginación de registros.</h3>
            <p className={styles.parr}>En la parte inferior derecha de la tabla, se encuentran ubicados dos botones azules denominados "Anterior" y "Siguiente". Estos botones facilitan el desplazamiento entre las páginas de registros. Si solo hay una página, estos botones se encontrarán deshabilitados.</p>
            <img src="https://images.tango.us/workflows/27e8d78b-6177-404f-a584-5b384e3bd135/steps/74872019-17fe-4e3b-8a94-f85f97bea168/8e3f70cd-f710-421e-a9f3-6578ce9588fe.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7444&fp-y=0.4087&fp-z=2.0488&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=397&mark-y=399&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz03OTgmaD01NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img} />
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