import HeaderTitle from "../components/HeaderTitle.tsx";
import {useAppSelector} from "../../store/hooks.ts";
import Button from "../components/buttons/Button.tsx";
import {PlusIcon} from "lucide-react";
import TaskCard from "../components/TaskCard.tsx";
import {useModal} from "../hooks/useModal.ts";
import Modal from "../popups/Modal.tsx";
import TaskForm from "../components/forms/TaskForm.tsx";
import NoData from "./NoData.tsx";
import {useState} from "react";
import type {Task} from "../../types.ts";


function TasksPage() {
    const data = useAppSelector(state => state.userState.data?.tasks);
    const modal = useModal()
    const editModal = useModal();
    const [editingTask, setEditingTask] = useState<Task | null>(null);
    const handleEditTask = (task: Task) => {
        setEditingTask(task);
        editModal.open();
    };

    const handleCloseEditModal = () => {
        setEditingTask(null);
        editModal.close();
    };

    const handleTaskAdded = () => {
        modal.close();
    };

    const handleTaskEdited = () => {
        setEditingTask(null);
        editModal.close();
    };

    return (
        <div className="flex flex-col gap-y-[30px] ">
            <div className="flex items-center justify-between">
                <HeaderTitle text='Tasks' textSize={'lg'}/>
                <Button
                    onClick={modal.open}
                    btnType='button'
                    btnText='Add Task'
                    variant='secondary'
                    btnIcon={PlusIcon}
                />
            </div>

            {!data?.length && <NoData text={'There are no tasks to complete'}/>}

            <div className="flex gap-[20px] flex-wrap">
                {data?.map(t => {
                    return (
                        <TaskCard
                            {...t}
                            key={t.id}
                            onEdit={() => handleEditTask(t)}
                        />
                    );
                })}
            </div>

            {/* Модальное окно для добавления задачи */}
            <Modal isOpen={modal.isOpen} onClose={modal.close}>
                <TaskForm
                    onTaskAdded={handleTaskAdded}
                    isEditing={false}
                />
            </Modal>

            {/* Модальное окно для редактирования задачи */}
            <Modal isOpen={editModal.isOpen} onClose={handleCloseEditModal}>
                <TaskForm
                    task={editingTask}
                    onTaskEdited={handleTaskEdited}
                    isEditing={true}
                />
            </Modal>
        </div>
    )
}
export default TasksPage;