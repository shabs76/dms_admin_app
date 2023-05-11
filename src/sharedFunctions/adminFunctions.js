import AddonCont from "../components/pages/Admin/Addon/AddonCont";
import AddServices from "../components/pages/Admin/AddService/AddServices";
import AddUsersCont from "../components/pages/Admin/AddUsers/AddUsersCont";
import ClientsCont from "../components/pages/Admin/Clients/ClientsCont";
import PaymentsCont from "../components/pages/Admin/Payments/PaymentsCont";
import ProfileSettings from "../components/pages/Admin/ProfileSettings/ProfileSettings";
import UsersCont from "../components/pages/Admin/Users/UsersCont";
import Offences from "../components/pages/Offences/Offences";

export const AdminFunctions = [
    {
        name: 'Users',
        type: 'client',
        icon: 'group',
        id: 'users',
        comp: (<UsersCont />),
    },
    {
        name: 'Add Users',
        icon: 'group_add',
        type: 'client',
        id: 'users_add',
        comp: (<AddUsersCont />),
    },
    {
        name: 'Payments',
        icon: 'loyalty',
        type: 'client',
        id: 'payments',
        comp: (<PaymentsCont />),
    },
    {
        name: 'Add Service',
        icon: 'add',
        type: 'client',
        id: 'add_service',
        comp: (<AddServices />),
    },
    {
        name: 'Profile Settings',
        icon: 'settings',
        type: 'client',
        id: 'settings',
        comp: (<ProfileSettings />),
    },
    {
        name: 'Vehicles Owners',
        icon: 'group',
        type: 'admin',
        id: 'clients',
        comp: (<ClientsCont />)
    },
    {
        name: 'Create Owner',
        icon: 'group_add',
        type: 'admin',
        id: 'createOwner',
        comp: (<AddUsersCont />)
    },
    {
        name: 'Vehicles',
        icon: 'airport_shuttle',
        type: 'admin',
        id: 'Plans',
        comp: (<Offences />),
    },
    {
        name: 'Admins',
        icon: 'person',
        type: 'admin',
        id: 'createAdmin',
        comp: (<AddonCont />)
    },
];