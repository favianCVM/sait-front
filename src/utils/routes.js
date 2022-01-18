import {
  RegisterIncidence as AdminRegisterIncidence,
  Technicians as AdminTechnicians,
  Users as AdminUsers,
  Incidences as AdminIncidences,
  Components as AdminComponents,
  Devices as AdminDevices,
} from "@pages/admin/index";
import {
  RegisterIncidence as TechnicianRegisterIncidence,
  Components as TechnicianComponents,
  Incidences as TechnicianIncidences,
} from "@pages/technician/index";
import {
  IoPerson,
  IoAddCircleOutline,
  IoAlertCircle,
  IoBuild,
} from "react-icons/io5";
import { BiDevices, BiChip } from "react-icons/bi";

const adminRoutes = [
  {
    to: "/admin/incidences",
    as: "/admin/incidencias",
    icon: IoAlertCircle,
    title: "Incidencias",
    component: AdminIncidences,
  },
  {
    to: "/admin/register-incidence",
    as: "/admin/registrar-incidencia",
    icon: IoAddCircleOutline,
    title: "Registrar incidencia",
    component: AdminRegisterIncidence,
  },
  {
    to: "/admin/technicians",
    as: "/admin/tecnicos",
    icon: IoBuild,
    title: "Técnicos",
    component: AdminTechnicians,
  },
  {
    to: "/admin/components",
    as: "/admin/componentes",
    icon: BiChip,
    title: "Componentes",
    component: AdminComponents,
  },
  {
    to: "/admin/devices",
    as: "/admin/equipos",
    icon: BiDevices,
    title: "Equipos",
    component: AdminDevices,
  },
  {
    to: "/admin/users",
    as: "/admin/usuarios",
    icon: IoPerson,
    title: "Usuarios",
    component: AdminUsers,
  },
];

const userRoutes = [
  {
    to: "/register-incidence",
    as: "/registrar-incidencia",
    icon: IoAddCircleOutline,
    title: "Registrar incidencia",
    component: null,
  },
  {
    to: "/incidences",
    as: "/incidencias",
    icon: IoAlertCircle,
    title: "Incidencias",
    component: null,
  },
];

const technicianRoutes = [
  {
    to: "/incidences",
    as: "/incidencias",
    icon: IoAlertCircle,
    title: "Incidencias",
    component: TechnicianIncidences,
  },
  // {
  //   to: "/register-incidence",
  //   as: "/registrar-incidencia",
  //   icon: IoAddCircleOutline,
  //   title: "Registrar incidencia",
  //   component: TechnicianRegisterIncidence,
  // },
  {
    to: "/components",
    as: "/componentes",
    icon: BiChip,
    title: "Componentes",
    component: TechnicianComponents,
  },
];

export default {
  60: adminRoutes,
  50: userRoutes,
  55: technicianRoutes,
};
