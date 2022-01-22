import {
  RegisterIncidence as AdminRegisterIncidence,
  Technicians as AdminTechnicians,
  Users as AdminUsers,
  Incidences as AdminIncidences,
  Components as AdminComponents,
  Devices as AdminDevices,
  HandleIncidence as AdminHandleIncidence,
  TechnicianProfile as AdminTechnicianProfile,
} from "@pages/admin/index";
import {
  RegisterIncidence as TechnicianRegisterIncidence,
  Components as TechnicianComponents,
  Incidences as TechnicianIncidences,
  HandleIncidence as TechnicianHandleIncidence,
} from "@pages/technician/index";

import {
  UserProfile as UserUserProfile,
  HandleIncidence as UserHandleIncidence,
  Incidences as UserIncidences,
  RegisterIncidence as UserRegisterIncidence,
} from "@pages/user/index";
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
  {
    to: "/admin/incidence-management/:incidence_id",
    as: "/admin/gestion-incidencia/:incidence_id",
    icon: null,
    title: null,
    component: AdminHandleIncidence,
  },
  {
    to: "/admin/technician-profile/:technician_id",
    as: "/admin/perfil-tecnico/:technician_id",
    icon: null,
    title: null,
    component: AdminTechnicianProfile,
  },
];

const userRoutes = [
  {
    to: "/register-incidence",
    as: "/registrar-incidencia",
    icon: IoAddCircleOutline,
    title: "Registrar incidencia",
    component: UserRegisterIncidence,
  },
  {
    to: "/incidences",
    as: "/incidencias",
    icon: IoAlertCircle,
    title: "Incidencias",
    component: UserIncidences,
  },
  {
    to: "/profile",
    as: "/perfil",
    icon: IoPerson,
    title: "Perfil",
    component: UserUserProfile,
  },
  {
    to: "/handle-incidence/:incidence_id",
    as: "/gestionar-incidencia/:incidence_id",
    icon: null,
    title: null,
    component: UserHandleIncidence,
  },
];

const technicianRoutes = [
  {
    to: "/technician/incidences",
    as: "/tecnico/incidencias",
    icon: IoAlertCircle,
    title: "Incidencias",
    component: TechnicianIncidences,
  },
  {
    to: "/register-incidence",
    as: "/registrar-incidencia",
    icon: IoAddCircleOutline,
    title: "Registrar incidencia",
    component: TechnicianRegisterIncidence,
  },
  {
    to: "/technician/components",
    as: "/tecnico/componentes",
    icon: BiChip,
    title: "Componentes",
    component: TechnicianComponents,
  },
  {
    to: "/technician/incidence-management/:incidence_id",
    as: "/tecnico/gestion-incidencia/:incidence_id",
    icon: null,
    title: null,
    component: TechnicianHandleIncidence,
  },
];

export default {
  60: adminRoutes,
  50: userRoutes,
  55: technicianRoutes,
};
