PGDMP                         z           qjzwctoz     13.5 (Ubuntu 13.5-2.pgdg20.04+1)    14.5 G               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    9574889    qjzwctoz    DATABASE     ]   CREATE DATABASE qjzwctoz WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE qjzwctoz;
                qjzwctoz    false                       0    0    DATABASE qjzwctoz    ACL     ;   REVOKE CONNECT,TEMPORARY ON DATABASE qjzwctoz FROM PUBLIC;
                   qjzwctoz    false    4126                        3079    17161 	   btree_gin 	   EXTENSION     =   CREATE EXTENSION IF NOT EXISTS btree_gin WITH SCHEMA public;
    DROP EXTENSION btree_gin;
                   false                        0    0    EXTENSION btree_gin    COMMENT     R   COMMENT ON EXTENSION btree_gin IS 'support for indexing common datatypes in GIN';
                        false    15                        3079    17702 
   btree_gist 	   EXTENSION     >   CREATE EXTENSION IF NOT EXISTS btree_gist WITH SCHEMA public;
    DROP EXTENSION btree_gist;
                   false            !           0    0    EXTENSION btree_gist    COMMENT     T   COMMENT ON EXTENSION btree_gist IS 'support for indexing common datatypes in GiST';
                        false    19                        3079    16671    citext 	   EXTENSION     :   CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;
    DROP EXTENSION citext;
                   false            "           0    0    EXTENSION citext    COMMENT     S   COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';
                        false    8                        3079    17599    cube 	   EXTENSION     8   CREATE EXTENSION IF NOT EXISTS cube WITH SCHEMA public;
    DROP EXTENSION cube;
                   false            #           0    0    EXTENSION cube    COMMENT     E   COMMENT ON EXTENSION cube IS 'data type for multidimensional cubes';
                        false    17                        3079    16384    dblink 	   EXTENSION     :   CREATE EXTENSION IF NOT EXISTS dblink WITH SCHEMA public;
    DROP EXTENSION dblink;
                   false            $           0    0    EXTENSION dblink    COMMENT     _   COMMENT ON EXTENSION dblink IS 'connect to other PostgreSQL databases from within a database';
                        false    2                        3079    17152    dict_int 	   EXTENSION     <   CREATE EXTENSION IF NOT EXISTS dict_int WITH SCHEMA public;
    DROP EXTENSION dict_int;
                   false            %           0    0    EXTENSION dict_int    COMMENT     Q   COMMENT ON EXTENSION dict_int IS 'text search dictionary template for integers';
                        false    14                        3079    18325 	   dict_xsyn 	   EXTENSION     =   CREATE EXTENSION IF NOT EXISTS dict_xsyn WITH SCHEMA public;
    DROP EXTENSION dict_xsyn;
                   false            &           0    0    EXTENSION dict_xsyn    COMMENT     e   COMMENT ON EXTENSION dict_xsyn IS 'text search dictionary template for extended synonym processing';
                        false    20                        3079    17686    earthdistance 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS earthdistance WITH SCHEMA public;
    DROP EXTENSION earthdistance;
                   false    17            '           0    0    EXTENSION earthdistance    COMMENT     f   COMMENT ON EXTENSION earthdistance IS 'calculate great-circle distances on the surface of the Earth';
                        false    18                        3079    16660    fuzzystrmatch 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS fuzzystrmatch WITH SCHEMA public;
    DROP EXTENSION fuzzystrmatch;
                   false            (           0    0    EXTENSION fuzzystrmatch    COMMENT     ]   COMMENT ON EXTENSION fuzzystrmatch IS 'determine similarities and distance between strings';
                        false    7                        3079    17025    hstore 	   EXTENSION     :   CREATE EXTENSION IF NOT EXISTS hstore WITH SCHEMA public;
    DROP EXTENSION hstore;
                   false            )           0    0    EXTENSION hstore    COMMENT     S   COMMENT ON EXTENSION hstore IS 'data type for storing sets of (key, value) pairs';
                        false    13                        3079    16903    intarray 	   EXTENSION     <   CREATE EXTENSION IF NOT EXISTS intarray WITH SCHEMA public;
    DROP EXTENSION intarray;
                   false            *           0    0    EXTENSION intarray    COMMENT     g   COMMENT ON EXTENSION intarray IS 'functions, operators, and index support for 1-D arrays of integers';
                        false    12                        3079    16444    ltree 	   EXTENSION     9   CREATE EXTENSION IF NOT EXISTS ltree WITH SCHEMA public;
    DROP EXTENSION ltree;
                   false            +           0    0    EXTENSION ltree    COMMENT     Q   COMMENT ON EXTENSION ltree IS 'data type for hierarchical tree-like structures';
                        false    4                        3079    18337    pg_stat_statements 	   EXTENSION     F   CREATE EXTENSION IF NOT EXISTS pg_stat_statements WITH SCHEMA public;
 #   DROP EXTENSION pg_stat_statements;
                   false            ,           0    0    EXTENSION pg_stat_statements    COMMENT     u   COMMENT ON EXTENSION pg_stat_statements IS 'track planning and execution statistics of all SQL statements executed';
                        false    22                        3079    16824    pg_trgm 	   EXTENSION     ;   CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;
    DROP EXTENSION pg_trgm;
                   false            -           0    0    EXTENSION pg_trgm    COMMENT     e   COMMENT ON EXTENSION pg_trgm IS 'text similarity measurement and index searching based on trigrams';
                        false    11            
            3079    16787    pgcrypto 	   EXTENSION     <   CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;
    DROP EXTENSION pgcrypto;
                   false            .           0    0    EXTENSION pgcrypto    COMMENT     <   COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';
                        false    10                        3079    17597 
   pgrowlocks 	   EXTENSION     >   CREATE EXTENSION IF NOT EXISTS pgrowlocks WITH SCHEMA public;
    DROP EXTENSION pgrowlocks;
                   false            /           0    0    EXTENSION pgrowlocks    COMMENT     I   COMMENT ON EXTENSION pgrowlocks IS 'show row-level locking information';
                        false    16                        3079    16629    pgstattuple 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS pgstattuple WITH SCHEMA public;
    DROP EXTENSION pgstattuple;
                   false            0           0    0    EXTENSION pgstattuple    COMMENT     C   COMMENT ON EXTENSION pgstattuple IS 'show tuple-level statistics';
                        false    5                        3079    16639 	   tablefunc 	   EXTENSION     =   CREATE EXTENSION IF NOT EXISTS tablefunc WITH SCHEMA public;
    DROP EXTENSION tablefunc;
                   false            1           0    0    EXTENSION tablefunc    COMMENT     `   COMMENT ON EXTENSION tablefunc IS 'functions that manipulate whole tables, including crosstab';
                        false    6                        3079    18330    unaccent 	   EXTENSION     <   CREATE EXTENSION IF NOT EXISTS unaccent WITH SCHEMA public;
    DROP EXTENSION unaccent;
                   false            2           0    0    EXTENSION unaccent    COMMENT     P   COMMENT ON EXTENSION unaccent IS 'text search dictionary that removes accents';
                        false    21            	            3079    16776 	   uuid-ossp 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
    DROP EXTENSION "uuid-ossp";
                   false            3           0    0    EXTENSION "uuid-ossp"    COMMENT     W   COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
                        false    9                        3079    16430    xml2 	   EXTENSION     8   CREATE EXTENSION IF NOT EXISTS xml2 WITH SCHEMA public;
    DROP EXTENSION xml2;
                   false            4           0    0    EXTENSION xml2    COMMENT     8   COMMENT ON EXTENSION xml2 IS 'XPath querying and XSLT';
                        false    3            ?            1259    9574955    comments    TABLE     ?   CREATE TABLE public.comments (
    comments_id integer NOT NULL,
    reply integer,
    comments text,
    created_date date,
    user_id integer,
    company_id integer
);
    DROP TABLE public.comments;
       public         heap    qjzwctoz    false            ?            1259    9584780    comments_comments_id_seq    SEQUENCE     ?   ALTER TABLE public.comments ALTER COLUMN comments_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.comments_comments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          qjzwctoz    false    229            ?            1259    9574924 	   companies    TABLE     	  CREATE TABLE public.companies (
    company_id integer NOT NULL,
    name character varying(255),
    password character varying(255),
    email character varying(255),
    country character varying(255),
    website character varying(255),
    num_employees integer,
    respond_time integer,
    founded_year integer,
    image text,
    category character(255),
    cover text,
    description text,
    languages text,
    test_project boolean,
    city character(255),
    remote character(255),
    service text
);
    DROP TABLE public.companies;
       public         heap    qjzwctoz    false            ?            1259    9584773    companies_company_id_seq    SEQUENCE     ?   ALTER TABLE public.companies ALTER COLUMN company_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.companies_company_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          qjzwctoz    false    226            ?            1259    9574940 
   evaluation    TABLE     ?   CREATE TABLE public.evaluation (
    rating_id integer NOT NULL,
    quality integer,
    user_id integer,
    company_id integer,
    budget integer,
    deadlines integer,
    collaboration integer
);
    DROP TABLE public.evaluation;
       public         heap    qjzwctoz    false            ?            1259    9584784    evaluation_rating_id_seq    SEQUENCE     ?   ALTER TABLE public.evaluation ALTER COLUMN rating_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.evaluation_rating_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          qjzwctoz    false    228            ?            1259    9574932    users    TABLE       CREATE TABLE public.users (
    user_id integer NOT NULL,
    first_name character varying(255),
    last_name character varying(255),
    user_name character varying(255),
    email character varying(255),
    password character varying(255),
    image text
);
    DROP TABLE public.users;
       public         heap    qjzwctoz    false            ?            1259    9584761    users_user_id_seq    SEQUENCE     ?   ALTER TABLE public.users ALTER COLUMN user_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          qjzwctoz    false    227                      0    9574955    comments 
   TABLE DATA           c   COPY public.comments (comments_id, reply, comments, created_date, user_id, company_id) FROM stdin;
    public          qjzwctoz    false    229   iF                 0    9574924 	   companies 
   TABLE DATA           ?   COPY public.companies (company_id, name, password, email, country, website, num_employees, respond_time, founded_year, image, category, cover, description, languages, test_project, city, remote, service) FROM stdin;
    public          qjzwctoz    false    226   ?F                 0    9574940 
   evaluation 
   TABLE DATA           o   COPY public.evaluation (rating_id, quality, user_id, company_id, budget, deadlines, collaboration) FROM stdin;
    public          qjzwctoz    false    228   ?N                 0    9574932    users 
   TABLE DATA           b   COPY public.users (user_id, first_name, last_name, user_name, email, password, image) FROM stdin;
    public          qjzwctoz    false    227   'O       5           0    0    comments_comments_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.comments_comments_id_seq', 1, false);
          public          qjzwctoz    false    232            6           0    0    companies_company_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.companies_company_id_seq', 59, true);
          public          qjzwctoz    false    231            7           0    0    evaluation_rating_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.evaluation_rating_id_seq', 4, true);
          public          qjzwctoz    false    233            8           0    0    users_user_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.users_user_id_seq', 22, true);
          public          qjzwctoz    false    230            ?           2606    9574962    comments comments_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (comments_id);
 @   ALTER TABLE ONLY public.comments DROP CONSTRAINT comments_pkey;
       public            qjzwctoz    false    229            ?           2606    9574931    companies companies_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.companies
    ADD CONSTRAINT companies_pkey PRIMARY KEY (company_id);
 B   ALTER TABLE ONLY public.companies DROP CONSTRAINT companies_pkey;
       public            qjzwctoz    false    226            ?           2606    9574944    evaluation evaluation_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.evaluation
    ADD CONSTRAINT evaluation_pkey PRIMARY KEY (rating_id);
 D   ALTER TABLE ONLY public.evaluation DROP CONSTRAINT evaluation_pkey;
       public            qjzwctoz    false    228            ?           2606    9574939    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            qjzwctoz    false    227            ?           2606    9574963    comments FK_comments.company_id    FK CONSTRAINT     ?   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT "FK_comments.company_id" FOREIGN KEY (company_id) REFERENCES public.companies(company_id);
 K   ALTER TABLE ONLY public.comments DROP CONSTRAINT "FK_comments.company_id";
       public          qjzwctoz    false    229    3971    226            ?           2606    9574968    comments FK_comments.user_id    FK CONSTRAINT     ?   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT "FK_comments.user_id" FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 H   ALTER TABLE ONLY public.comments DROP CONSTRAINT "FK_comments.user_id";
       public          qjzwctoz    false    3973    229    227            ?           2606    9574945 #   evaluation FK_evaluation.company_id    FK CONSTRAINT     ?   ALTER TABLE ONLY public.evaluation
    ADD CONSTRAINT "FK_evaluation.company_id" FOREIGN KEY (company_id) REFERENCES public.companies(company_id);
 O   ALTER TABLE ONLY public.evaluation DROP CONSTRAINT "FK_evaluation.company_id";
       public          qjzwctoz    false    226    3971    228            ?           2606    9574950     evaluation FK_evaluation.user_id    FK CONSTRAINT     ?   ALTER TABLE ONLY public.evaluation
    ADD CONSTRAINT "FK_evaluation.user_id" FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 L   ALTER TABLE ONLY public.evaluation DROP CONSTRAINT "FK_evaluation.user_id";
       public          qjzwctoz    false    3973    228    227                  x?????? ? ?         =  x??Z???:]?W(*??;"??qWfH?y&j#ly???$f??????c-??@V??z?u3NH????G????Q??C/?g??v?????z??k??w??{?l?h)(Fw.????f???zrFkeW?9n????D?'??L??N'??E???2?jU?|fTxY?(?c?HB?0??8??r,???>&??.?(?0?r}'zvCg&|????O?R@0fX????? ???@J-:???"??po?"????????<X?#"@E?
??	`j?&$?u??V?7>???O??(???#d?]_C??f?????? Eh?1,??o???F|??=3p9!???????C?0??P?G?????uj??K?? ??z??;G?e&??a?C??$z????3y??q?E??2>????W?cp? @q@T$<A?????X#???????Y? ??????!??????	??@':??1??7????>y??na???G??'??XX*"????????i!???Sp???"|v??s?)??????41?RyH8a??Z@?4
?y????"v"??E(?_3???7??????a>]??)?\????#????????6????q:??V??????CP[jq????EQ?7????????O@???????r????q?>b~?????1?zH ?6?C?#*+?E :C??X\s<?9N?SC??x[?dB????fM????????/du`?*?????i
U?????p?a?!:?&v?+qJ?o??T?UP?V???????Zp)??C?Z?	?/M*?Fa??????y%??{m;???X??[????+??B%)???!??????]???;d???Q?Rs???uw??4???A?????????IZ1??8;?M0?Nh???d~???7??????E??-??????iX???&i?L?2!_?_?~????????d?:??(???3w???9?5???r??J5?*???%?r???r???$?.&?n?\?Q??A?\??J?a?ai???=k???2-D\?!W4m?Zi?N?^^??g??:??N??x8???:??z?7`e}0?o4}W;2=6???p??t?c??5?X?s???i?>?A??2????F???f????'M7(?zW????6????uK?R?vd???O???F???7??~q??Hr?hk???`???m?U???V??q???8?w7I#-???t??a?FO?G???{+3i???EP??? ?b0mp)Z??iCH?20I
?g??MirRf?2U%g?:????aS(???kx??	???R??/?S???ZH1??????_w??t??V~oy?????fj?c@bq?X??y?B???}.?????*???????????'j?BP??B?.?r??9mk8n?????n]Z??w?~???0!??Q???`????W????bi?t??l?A?????E??{b???R??ml?7{9?S5??;?\?????Y?C?/?4??:R?(6?f??????????RC+V????b?&??V????WW??;aFb-$?@nR]n??^?6?nolK??e??9k+??????J>?LO??DT?U?Z'U?pj??????_-??a???	n?6"???6??????S?,[(%}?M?????????bK7?a?P-??5??B????yKlH??x?&??c????????:??_??????I?b
?aR-??{Tz????G??6????K*?y=?l?x?Y?Z???:=?n???xc?+??l??-P?????????????]??j??+??%????-??~kG??0K[?Q?5??q??|?x6????Xt?}?>),??~8?????v?a???/`?v?s??e?????S.????VM??F?C?????_Yn???r?-D?\??t??????????bI?y)?nX?#???79{d?? ?"*/?fmNV?]??~ooW*?U?????vtw?59??{^~???a?????????Q~????+jtI^C???[???Xg??????P)??!??n?&h$???/R_@?*???D???????}?uw?59???7!????@+5         D   x?%???0??a*??m?D'??s?*?8 )??b?)R?F?wdt?G?-,'?a?G??&?g???? ???         ?  x??????0???^?kH w-"x TS?? ?T???No?b?y??S?'Z?fU???h??R4?` ????????{*u???9???n?Z???Cd?D??0???????|Q????;Y?i?S[L6??3K???????D8??`/NYbf]r?p;?1 ??r???????l-?!?s7?};J???]to??K?FR7????^F???????m?n9?|"(?^%????J?n?z?`"?[:?D????8?????<???#??v???'?[>H??=7I?6???v?%?L??Y?{????!	????j?_????????????9=f?	????|???)o??m???ba??$??@>??r???G?k????v?K3?-[?5??3c??????????6r???????qD??????|????$??	Ko??,!?\???U-^?????3[?A??~???? ?     