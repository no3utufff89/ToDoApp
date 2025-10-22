import {useForm} from "react-hook-form";
import type {Priority, Task} from "../../../types.ts";
import InputWithLabel from "../inputs/InputWithLabel.tsx";
import Button from "../buttons/Button.tsx";
import TextareaWithLabel from "../inputs/TextareaWithLabel.tsx";
import {priorityOptions} from "../../scripts/data.ts";
import RadioBtn from "../inputs/RadioBtn.tsx";
import {useAppDispatch} from "../../../store/hooks.ts";
import {addTask, updateTask} from "../../../store/slices/userSlice.ts";
import {generateRandomId} from "../../scripts/helpers/generateRandomId.ts";
import {useEffect} from "react";

interface TaskFormProps {
    onTaskAdded?: () => void;
    onTaskEdited?: () => void;
    isEditing?: boolean;
    task?: Task | null;
}

type TaskFormData = Omit<Task, 'id' | 'completed' | 'createdAt'>;

function TaskForm({ onTaskAdded, onTaskEdited, isEditing = false, task }: TaskFormProps) {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        reset,
        setValue,
    } = useForm<TaskFormData>({
        defaultValues: {
            title: "",
            description: "",
            priority: 'medium' as Priority
        }
    });

    // Эффект для заполнения формы данными задачи при редактировании
    useEffect(() => {
        if (isEditing && task) {
            setValue('title', task.title);
            setValue('description', task.description || '');
            setValue('priority', task.priority);
        }
    }, [isEditing, task, setValue]);

    const onSubmit = (taskData: TaskFormData) => {
        if (isEditing && task) {
            // Режим редактирования - обновляем существующую задачу
            const updatedTask: Task = {
                ...taskData,
                id: task.id,
                completed: task.completed,
                createdAt: task.createdAt,
            };
            dispatch(updateTask(updatedTask));
            setTimeout(() => {
                reset();
                onTaskEdited?.();
            }, 100);
        } else {
            // Режим добавления - создаем новую задачу
            const newDate = new Date().toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            });
            const newTask: Task = {
                ...taskData,
                id: generateRandomId(),
                completed: false,
                createdAt: newDate.toString(),
            };
            dispatch(addTask(newTask));
            setTimeout(() => {
                reset();
                onTaskAdded?.();
            }, 100);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <legend className="text-xl font-semibold">
                {isEditing ? 'Edit Task' : 'Add New Task'}
            </legend>

            <InputWithLabel
                labelText={isEditing ? 'Task Title' : 'Task Title'}
                id="title"
                name="title"
                register={register}
                type="text"
                required="Task title is required"
            />

            <TextareaWithLabel
                labelText={isEditing ? 'Description' : 'Description'}
                id="description"
                register={register}
                name="description"
            />

            {priorityOptions?.length > 0 && (
                <RadioBtn<TaskFormData>
                    name="priority"
                    register={register}
                    options={priorityOptions}
                    label="Task Priority"
                    required
                    variant={'default'}
                    orientation="horizontal"
                />
            )}

            <div className="flex gap-3">
                <Button
                    btnType="submit"
                    btnText={isEditing ? 'Save Changes' : 'Add Task'}
                    variant="secondary"
                />
                {isEditing && (
                    <Button
                        btnType="button"
                        btnText="Cancel"
                        variant="outline"
                        onClick={onTaskEdited}
                    />
                )}
            </div>
        </form>
    );
}

export default TaskForm;