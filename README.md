# Project3

Henkilöhakemisto, johon on listattuna hyviä tyyppejä sekä miksi he ovat hyviä tyyppejä. Linkitetty itseluotuun MondoDB:seen.

## HTTP verbit

Sisältää toiminnallisuuden verbeille GET, POST, PATCH ja DELETE. Verbien toiminnallisuus testattu VSCoden "REST Client"-nimisellä extensionilla.

## Linkit

https://project3jooliu.herokuapp.com/henkilot/getall
Tulostaa koko listan.

https://project3jooliu.herokuapp.com/henkilot/:id
Tulostaa yhden henkilön annetun ID:n perusteella.

https://project3jooliu.herokuapp.com/henkilot/add
Uuden henkilön lisääminen listalle. Henkilöä luodessa on huomattava antaa nimi sekä syy miksi hyvä tyyppi. Esim. {
    "name": "John Doe",
    "whyHyva": "hyvä peruskansalainen"
}

https://project3jooliu.herokuapp.com/henkilot/update/:id
Henkilön tietojen muokkaaminen annetun ID:n perusteella.

https://project3jooliu.herokuapp.com/henkilot/delete/:id
Henkilön tietojne poistaminen annetun ID:n perusteella.
