import type {RadioOption} from "../../types.ts";
import {ListChecks} from "lucide-react";

export const menuItems =[

    { label: 'Tasks', href: '/tasks', icon:ListChecks },
]

export const priorityOptions: RadioOption[] = [
    { value: 'low', label: 'Low Priority' },
    { value: 'medium', label: 'Medium Priority' },
    { value: 'high', label: 'High Priority' },
];