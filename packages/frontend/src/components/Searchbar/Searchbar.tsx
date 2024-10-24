import React, { useEffect, useRef } from "react";
import { Form, useSearchParams } from "react-router-dom";

import Icon from "@components/Icon/Icon";

import { ReactComponent as Search } from "@assets/icons/search.svg";

import "./Searchbar.scss";

interface SearchbarProps {
  formId?: string;
  inputId?: string;
  buttonId?: string;
}

const Searchbar = ({ formId, inputId, buttonId }: SearchbarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("search");

  useEffect(() => {
    inputRef.current.value = searchValue;
  }, [searchValue]);

  return (
    <Form id={formId} className="searchbar" action="/items">
      <input
        ref={inputRef}
        id={inputId}
        type="text"
        name="search"
        autoComplete="off"
        required
        placeholder="¿Qué estás buscando?"
        onInvalid={() =>
          inputRef.current.setCustomValidity(
            "Ingresá lo que estás buscando para que podamos ayudarte"
          )
        }
        onInput={() => inputRef.current.setCustomValidity("")}
        defaultValue={searchValue}
      />
      <button id={buttonId} type="submit">
        <Icon color="#333333" size={12}>
          <Search />
        </Icon>
      </button>
    </Form>
  );
};

export default Searchbar;
