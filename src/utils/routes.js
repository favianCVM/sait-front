import {
  RegisterIncident,
  TechnicianAssigment,
  Users,
  Incidences,
  Components,
  Devices
} from '@pages/admin/index'
import {
  IoPerson,
  IoAddCircleOutline,
  IoAlertCircle,
  IoBuild,
} from "react-icons/io5";
import {
  BiDevices,
  BiChip
} from 'react-icons/bi'

const adminRoutes = [
  {
    to: "/admin/incidences",
    as: "/admin/incidencias",
    icon: IoAlertCircle,
    title: "Incidencias",
    component: Incidences
  },
  {
    to: "/admin/register-incident",
    as: "/admin/registrar-incidencia",
    icon: IoAddCircleOutline,
    title: "Registrar incidencia",
    component: RegisterIncident
  },
  {
    to: "/admin/technician-assignment",
    as: "/admin/asignar-tecnico",
    icon: IoBuild,
    title: "Asignación de técnico",
    component: TechnicianAssigment
  },
  {
    to: "/admin/components",
    as: "/admin/componentes",
    icon: BiChip,
    title: "Componentes",
    component: Components
  },
  {
    to: "/admin/devices",
    as: "/admin/equipos",
    icon: BiDevices,
    title: "Equipos",
    component: Devices
  },
  {
    to: "/admin/users",
    as: "/admin/usuarios",
    icon: IoPerson,
    title: "Usuarios",
    component: Users
  },
];

const userRoutes = [
  {
    to: "/register-incident",
    as: "/registrar-incidencia",
    icon: IoAddCircleOutline,
    title: "Registrar incidencia",
    component: null
  },
  {
    to: "/incidences",
    as: "/incidencias",
    icon: IoAlertCircle,
    title: "Incidencias",
    component: null
  },
];

export default {
  adminRoutes,
  userRoutes,
}