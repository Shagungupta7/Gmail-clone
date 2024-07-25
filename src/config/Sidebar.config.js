
import { Inbox, StarBorder, Schedule, Send, InsertDriveFileOutlined, DeleteOutlined, MailOutline } from "@mui/icons-material";





export const SIDEBAR_DATA = [
    {
        name: 'inbox',
        title: 'inbox',
        icon: Inbox,
    },
    {
        name: 'starred',
        title: 'starred',
        icon: StarBorder,
    },
    {
        name: 'snoozed',
        title: 'snoozed',
        icon: Schedule,
    },
    {
        name: 'sent',
        title: 'sent',
        icon: Send,
    },
    {
        name: 'drafts',
        title: 'drafts',
        icon: InsertDriveFileOutlined,
    },
    {
        name: 'bin',
        title: 'bin',
        icon: DeleteOutlined,
    },
    {
        name: 'allmail',
        title: 'All mail',
        icon: MailOutline,
    }
];

