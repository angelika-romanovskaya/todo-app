import React from "react";
import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useTodos } from "@entities/Todo/model/hooks";
import { useTranslation } from "react-i18next";

interface DeleteTodoProps {
	todoId: string;
}

export const DeleteTodo: React.FC<DeleteTodoProps> = ({ todoId }) => {
	const { deleteTodo } = useTodos();
	const { t } = useTranslation();

	return (
		<Popconfirm
			title={t("delete.aria")}
			description={t("delete.confirm")}
			onConfirm={() => deleteTodo(todoId)}
			okText={t("confirm.yes")}
			cancelText={t("confirm.no")}
		>
			<Button
				type="text"
				danger
				icon={<DeleteOutlined />}
				aria-label="Delete task"
			/>
		</Popconfirm>
	);
};
