import React from "react";
import { Pagination } from "react-bootstrap";

export default function ResultsPagination({
	totalPages,
	currentPage,
	setCurrentPage,
}) {
	let items = [];
	let active = currentPage;
	for (let i = 1; i < totalPages; i++) {
		items.push(
			<Pagination.Item
				key={i}
				active={i === active}
				onClick={() => setCurrentPage(i)}
			>
				{i}
			</Pagination.Item>
		);
	}
	let pagesArr = [...items].slice(0, 10);
    
	return (
		<Pagination>
			{currentPage === 1 ? (
				""
			) : (
				<Pagination.Prev
					onClick={() => setCurrentPage(currentPage - 1)}
				/>
			)}
			{pagesArr}
			{currentPage === pagesArr.length ? (
				""
			) : (
				<Pagination.Next
					onClick={() => setCurrentPage(currentPage + 1)}
				/>
			)}
		</Pagination>
	);
}
