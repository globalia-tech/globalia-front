import {ExperienciaIcon} from "../../common/SvgIcons/ExperienciaIcon.jsx";
import {EntregaIcon} from "../../common/SvgIcons/EntregaIcon.jsx";
import {SolucionesIcon} from "../../common/SvgIcons/SolucionesIcon.jsx";
import {SoporteIcon} from "../../common/SvgIcons/SoporteIcon.jsx";

export const features = [
    {
        title: 'Experiencia y Profesionalismo',
        content: 'Contamos con un equipo experto en diseño web, desarrollo y soluciones digitales adaptadas a tus necesidades',
        icon:  <ExperienciaIcon sx={{ width: '100%', height: 'auto', color: '#000' }}  />,

    },
    {
        title: 'Entrega Puntual',
        content: 'Cumplimos con los plazos acordados sin comprometer la calidad',
        icon: <EntregaIcon sx={{ width: '100%', height: 'auto', color: '#000' }}  />

    },
    {
        title: 'Soluciones Personalizadas',
        content: 'Cada proyecto es único; creamos estrategias hechas a medida para alcanzar tus objetivos',
        icon: <SolucionesIcon sx={{ width: '100%', height: 'auto', color: '#000' }}  />

    },
    {
        title: 'Soporte Continuo',
        content: 'Te acompañamos en cada etapa del proceso con asesoramiento y soporte personalizado',
        icon: <SoporteIcon sx={{ width: '100%', height: 'auto', color: '#000' }}  />

    }
];