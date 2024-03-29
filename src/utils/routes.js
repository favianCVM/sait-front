import {
  RegisterIncidence as AdminRegisterIncidence,
  Technicians as AdminTechnicians,
  Users as AdminUsers,
  Incidences as AdminIncidences,
  Items as AdminItems,
  Devices as AdminDevices,
  HandleIncidence as AdminHandleIncidence,
  TechnicianProfile as AdminTechnicianProfile,
  UpdateIncidence as AdminUpdateIncidence,
} from "@pages/admin/index";
import {
  RegisterIncidence as TechnicianRegisterIncidence,
  Items as TechnicianItems,
  Incidences as TechnicianIncidences,
  HandleIncidence as TechnicianHandleIncidence,
  TechnicianProfile,
  TechnicianIncidences as TechnicianUserIncidences,
  ConcludeIncidence as TechnicianConcludeIncidence,
  UpdateIncidence as TechnicianUpdateIncidence,
  Devices as TechnicianDevices,
} from "@pages/technician/index";

import {
  UserProfile as UserUserProfile,
  HandleIncidence as UserHandleIncidence,
  Incidences as UserIncidences,
  RegisterIncidence as UserRegisterIncidence,
  UpdateIncidence as UserUpdateIncidence,
} from "@pages/user/index";
import {
  IoPerson,
  IoAlertCircle,
  IoBuild,
} from "react-icons/io5";
import { BiDevices, BiChip } from "react-icons/bi";
import { BsList } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";

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
    icon: BiAddToQueue,
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
    to: "/admin/inventory",
    as: "/admin/inventario",
    icon: BiChip,
    title: "Inventario",
    component: AdminItems,
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
    to: "/admin/incidence-management",
    as: "/admin/gestion-incidencia",
    icon: null,
    title: null,
    component: AdminHandleIncidence,
  },
  {
    to: "/admin/technician-profile",
    as: "/admin/perfil-tecnico",
    icon: null,
    title: null,
    component: AdminTechnicianProfile,
  },
  {
    to: "/admin/incidence-update",
    as: "/admin/actualizacion-incidencia",
    icon: null,
    title: null,
    component: AdminUpdateIncidence,
  },
];

const userRoutes = [
  {
    to: "/incidences",
    as: "/incidencias",
    icon: IoAlertCircle,
    title: "Incidencias",
    component: UserIncidences,
  },
  {
    to: "/register-incidence",
    as: "/registrar-incidencia",
    icon: BiAddToQueue,
    title: "Registrar incidencia",
    component: UserRegisterIncidence,
  },
  {
    to: "/incidence-management",
    as: "/gestion-incidencia",
    icon: null,
    title: null,
    component: UserHandleIncidence,
  },
  {
    to: "/incidence-update",
    as: "/actualizacion-incidencia",
    icon: null,
    title: null,
    component: UserUpdateIncidence,
  },

  // {
  //   to: "/profile",
  //   as: "/perfil",
  //   icon: IoPerson,
  //   title: "Perfil",
  //   component: UserUserProfile,
  // },
];

const technicianRoutes = [
  {
    to: "/technician/incidences",
    as: "/tecnico/incidencias",
    icon: IoAlertCircle,
    title: "Incidencias",
    component: TechnicianUserIncidences,
  },
  {
    to: "/technician/assigned-incidences",
    as: "/tecnico/incidencias-asignadas",
    icon: BsList,
    title: "Incidencias asignadas",
    component: TechnicianIncidences,
  },
  {
    to: "/technician/register-incidence",
    as: "/tecnico/tecregistrar-incidencia",
    icon: BiAddToQueue,
    title: "Registrar incidencia",
    component: TechnicianRegisterIncidence,
  },
  {
    to: "/technician/devices",
    as: "/tecnico/equipos",
    icon: BiDevices,
    title: "Equipos",
    component: TechnicianDevices,
  },

  {
    to: "/technician/inventory",
    as: "/tecnico/inventario",
    icon: BiChip,
    title: "Inventario",
    component: TechnicianItems,
  },
  {
    to: "/technician/incidence-management",
    as: "/tecnico/gestion-incidencia",
    icon: null,
    title: null,
    component: TechnicianHandleIncidence,
  },
  {
    to: "/technician/incidence-update",
    as: "/tecnico/actualizacion-incidencia",
    icon: null,
    title: null,
    component: TechnicianUpdateIncidence,
  },
  {
    to: "/technician/conclude-incidence",
    as: "/tecnico/concluir-incidencia",
    icon: null,
    title: null,
    component: TechnicianConcludeIncidence,
  },
  // {
  //   to: "/technician/profile",
  //   as: "/tecnico/perfil",
  //   icon: IoPerson,
  //   title: "Perfil",
  //   component: TechnicianProfile,
  // },
];

export default {
  60: adminRoutes,
  50: userRoutes,
  55: technicianRoutes,
};
