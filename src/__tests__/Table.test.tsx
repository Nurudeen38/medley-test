import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "@/components/Table/Table";

const tableColumns = [
  { accessor: "username", label: "Name" },
  {
    accessor: "email",
    label: "Email",
  },
  {
    accessor: "status",
    label: "Status",
  },
];

const tableRows = [
  { id: "1", username: "John Smith", email: "test@test.com", status: "accepted" },
  { id: "2", username: "David BecK", email: "test2@test.com", status: "rejected" },
  { id: "3", username: "Jane Nath", email: "test3@test.com", status: "waiting" },
];


test("Table headings are rendered with the columns passed in", () => {
  render(
      <Table limit="10" pageNo={1} totalPageCount={10} isLoading={false} handlePageChange={()=>null} rows={tableRows} columns={tableColumns}  />
  );

  const columns = screen
    .getAllByRole("columnheader")
    .map((cell) => cell.textContent);
  expect(columns).toStrictEqual(["Name", "Email", "Status"]);
});

test("Table cells are rendered with the data passed in", () => {
  render(
      <Table limit="10" pageNo={1} totalPageCount={10} isLoading={false} handlePageChange={()=>null} rows={tableRows} columns={tableColumns}  />
  );
  const cells = screen.getAllByRole("cell").map((cell) => cell.textContent);
  expect(cells).toStrictEqual([
    "John Smith",
    "test@test.com",
    "accepted",
    "David BecK",
    "test2@test.com",
    "rejected",
    "Jane Nath",
    "test3@test.com",
    "waiting",
  ]);
});

