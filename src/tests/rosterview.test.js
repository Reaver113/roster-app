import React from "react";
import { render, screen } from "@testing-library/react";
import RosterView from "../ components/RosterView";

describe("RosterView", () => {
  const viewingRoster = {
    start: "2022-03-07T09:00:00.000Z",
    end: "2022-03-07T17:00:00.000Z",
  };
  const users = [
    {
      _id: 1,
      name: "User 1",
      start: "2022-03-07T10:00:00.000Z",
      end: "2022-03-07T14:00:00.000Z",
    },
    {
      _id: 2,
      name: "User 2",
      start: "2022-03-07T13:00:00.000Z",
      end: "2022-03-07T18:00:00.000Z",
    },
  ];

  it("renders the correct shift hours for each user", () => {
    render(<RosterView viewingRoster={viewingRoster} users={users} />);
    expect(screen.getByText("User 1")).toBeInTheDocument();
    expect(screen.getByText("User 2")).toBeInTheDocument();
    expect(screen.getAllByText(":00").length).toBe(16); // 8 hours * 2 users
  });

  it("applies the correct color to shift hours", () => {
    render(<RosterView viewingRoster={viewingRoster} users={users} />);
    const user1Hours = screen.getAllByTestId("hourBlock-1");
    const user2Hours = screen.getAllByTestId("hourBlock-2");
    expect(user1Hours.length).toBe(4);
    expect(user2Hours.length).toBe(6);
    user1Hours.forEach((hour) => {
      expect(hour).toHaveClass("user1Shift");
    });
    user2Hours.forEach((hour) => {
      expect(hour).toHaveClass("user2Shift");
    });
  });
});
