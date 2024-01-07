import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className = {styles.sidebar}>
        <img 
            className = {styles.cover}
            src = "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <div className = {styles.profile}>
            <Avatar src = "https://media.licdn.com/dms/image/D4D03AQEqK5uipFOmyQ/profile-displayphoto-shrink_800_800/0/1700569830594?e=1709769600&v=beta&t=Ltkis2TnvK0ZDEXbacZe_Dx9FvbZmm03uD3PetLhgkI" />
            <strong>Yuri Pedrosa</strong>
            <span>Web Developer</span>
        </div>

        <footer>
            <a href = "#">
                <PencilLine size = {20}/>
                Editar seu perfil
            </a>
        </footer>
    </aside>
  );
}