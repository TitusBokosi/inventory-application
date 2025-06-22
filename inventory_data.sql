--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.products DROP CONSTRAINT fk_category;
ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
ALTER TABLE ONLY public.category DROP CONSTRAINT category_pkey;
DROP TABLE public.products;
DROP TABLE public.category;
SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: category; Type: TABLE; Schema: public; Owner: tee
--

CREATE TABLE public.category (
    category_id integer NOT NULL,
    category_name character varying(255) NOT NULL
);




--
-- Name: category_category_id_seq; Type: SEQUENCE; Schema: public; Owner: tee
--

ALTER TABLE public.category ALTER COLUMN category_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.category_category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: products; Type: TABLE; Schema: public; Owner: tee
--

CREATE TABLE public.products (
    product_id integer NOT NULL,
    product_name character varying(255),
    product_price numeric(10,2) NOT NULL,
    products_remaining integer DEFAULT 0 NOT NULL,
    category_id integer NOT NULL
);




--
-- Name: products_product_id_seq; Type: SEQUENCE; Schema: public; Owner: tee
--

ALTER TABLE public.products ALTER COLUMN product_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.products_product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: tee
--

COPY public.category (category_id, category_name) FROM stdin;
1	electronics
2	clothing
3	groceries
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: tee
--

COPY public.products (product_id, product_name, product_price, products_remaining, category_id) FROM stdin;
2	tv	34.50	4	2
3	tee	56.00	78	1
4	match	200.00	50	3
5	match	200.00	50	3
6	match	76.00	10092	3
\.


--
-- Name: category_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tee
--

SELECT pg_catalog.setval('public.category_category_id_seq', 3, true);


--
-- Name: products_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tee
--

SELECT pg_catalog.setval('public.products_product_id_seq', 6, true);


--
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: tee
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (category_id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: tee
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (product_id);


--
-- Name: products fk_category; Type: FK CONSTRAINT; Schema: public; Owner: tee
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES public.category(category_id) ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

