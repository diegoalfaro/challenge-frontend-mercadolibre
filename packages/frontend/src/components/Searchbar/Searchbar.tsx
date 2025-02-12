import React, { useEffect, useRef } from "react";
import { Form, useSearchParams } from "react-router-dom";

import Icon from "@components/Icon/Icon";

import { ReactComponent as Search } from "@assets/icons/search.svg";

import "./Searchbar.scss";
import { useTranslation } from "react-i18next";

interface SearchbarProps {
  formId?: string;
  inputId?: string;
  buttonId?: string;
}

const Searchbar = ({ formId, inputId, buttonId }: SearchbarProps) => {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("search");

  useEffect(() => {
    inputRef.current.value = searchValue;
  }, [searchValue]);

  return (
    <Form id={formId} className="searchbar" action="/items">
      <input
        aria-label={t("searchbar.inputAriaLabel")}
        ref={inputRef}
        id={inputId}
        type="text"
        name="search"
        autoComplete="off"
        required
        placeholder={t("searchbar.placeholder")}
        onInvalid={() =>
          inputRef.current.setCustomValidity(t("searchbar.required"))
        }
        onInput={() => inputRef.current.setCustomValidity("")}
        defaultValue={searchValue}
      />
      <button
        id={buttonId}
        aria-label={t("searchbar.buttonAriaLabel")}
        type="submit"
      >
        <Icon color="#333333" size={12}>
          <Search />
        </Icon>
      </button>
    </Form>
  );
};

export default Searchbar;
