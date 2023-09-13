import { render, screen } from "@testing-library/react";
import Some from "./Some";
import { BrowserRouter } from "react-router-dom";

    test ("Some_shows_in_the_document", () => {
        render (
          <BrowserRouter>
            <Some />
          </BrowserRouter>
        )
        const element   =  screen.getByText (
            "some"
        )
        expect (element).toBeInTheDocument ()
    })