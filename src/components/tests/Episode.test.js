import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Episode from "./../Episode";

const testEpisode = {
  id: 1,
  name: "",
  image: "https://i.ibb.co/2FsfXqM/stranger-things.png",
  season: 1,
  number: 1,
  summary: "test summary",
  runtime: 1,
};
const testEpisodeNoImg = {
        id: 1,
        name: "",
        image: null,
        season: 1,
        number: 1,
        summary: "test summary",
        runtime: 1,
      };

test("renders without error", () => {
    render(<Episode episode={testEpisode} />)
});

test("renders the summary test passed as prop", () => {
    render(<Episode episode={testEpisode} />);
    const summary = screen.queryAllByText(/summary/i);
    expect(summary).toBeInTheDocument();
    expect(summary).toBeTruthy();
    // expect(summary).toHaveTextContent('test summary')
    screen.debug()
});

test("renders default image when image is not defined", () => {
    render(<Episode episode={testEpisodeNoImg} />);
    const image = screen.queryByAltText("./stranger_things.png");
    expect(image).toBeInTheDocument();
});

