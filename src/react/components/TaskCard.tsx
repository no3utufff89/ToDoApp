import type {Priority} from "../../types.ts";
import Button from "./buttons/Button.tsx";
import {CheckIcon, EditIcon, TrashIcon} from "lucide-react";
import {useAppDispatch} from "../../store/hooks.ts";
import {deleteTask, toggleTask} from "../../store/slices/userSlice.ts";
interface TaskCardProps {
    id: string;
    title: string;
    description?: string;
    priority:Priority;
    completed: boolean;
    createdAt: string;
    // ... другие свойства
    onEdit?: () => void;
}
function TaskCard(props: TaskCardProps) {
    const dispatch = useAppDispatch();
    const { title, description, priority, createdAt, completed, id, onEdit} = props;

    const priorityGradients = {
        low: 'from-blue-50 to-blue-100 border-blue-200',
        medium: 'from-yellow-50 to-amber-100 border-yellow-200',
        high: 'from-red-50 to-red-100 border-red-200'
    };

    const priorityTextColors = {
        low: 'text-blue-800',
        medium: 'text-yellow-800',
        high: 'text-red-800'
    };

    function handleDelete() {
        dispatch(deleteTask({ taskId: id }));
    }


    function handleChangeStatus() {
        dispatch(toggleTask({ taskId: id }))
    }

    return (
        <div className={`
            rounded-xl p-4 card border bg-gradient-to-br transition-all duration-300
            ${priorityGradients[priority]}
            hover:shadow-lg hover:scale-[1.02]
            ${completed ? 'opacity-60 grayscale' : ''}
        `}>
            <div className="flex justify-between items-start mb-2">
                <h3 className={`
                    font-bold text-[15px] leading-tight
                    ${completed ? 'line-through text-gray-600' : priorityTextColors[priority]}
                `}>
                    {title}
                </h3>

                <div className="flex items-center gap-2">
                    <div className={`
                        w-3 h-3 rounded-full
                        ${priority === 'high' ? 'bg-red-500' : ''}
                        ${priority === 'medium' ? 'bg-yellow-500' : ''}
                        ${priority === 'low' ? 'bg-blue-500' : ''}
                    `} />
                </div>
            </div>

            {description && (
                <p className="text-gray-700 text-sm mb-3 line-clamp-2">
                    {description}
                </p>
            )}

            <div className="flex justify-between items-center text-xs flex-wrap gap-y-[10px]">
                <span className={`
                    px-2 py-1 rounded-full font-semibold
                    ${priority === 'high' ? 'bg-red-200 text-red-900' : ''}
                    ${priority === 'medium' ? 'bg-yellow-200 text-yellow-900' : ''}
                    ${priority === 'low' ? 'bg-blue-200 text-blue-900' : ''}
                `}>
                    {priority}
                </span>
                <div className="flex items-center gap-2">
                    <Button btnType={'button'} btnIcon={EditIcon} size={'xxs'} variant={'outline'} onClick={onEdit}></Button>
                    <Button btnType={'button'} btnIcon={CheckIcon} size={'xxs'} variant={'outline'} onClick={handleChangeStatus}></Button>
                    <Button btnType={'button'} btnIcon={TrashIcon} size={'xxs'} variant={'outline'} onClick={handleDelete}></Button>
                </div>
                <span className="text-gray-600">
                    {new Date(createdAt).toLocaleDateString()}
                </span>
            </div>
        </div>
    );
}

export default TaskCard;