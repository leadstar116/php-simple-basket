# simple_test
PHP simple product basket test
Task:
Acme Widget Co
Acme Widget Co are the leading provider of made up widgets and they’ve contracted you to
create a proof of concept for their new sales system.

They sell three products –
Red Widget(R01) $32.95
Green Widget(G01) $24.95
Blue Widget(B01) $7.95

To incentivise customers to spend more, delivery costs are reduced based on the amount
spent. Orders under $50 cost $4.95. For orders under $90, delivery costs $2.95. Orders of
$90 or more have free delivery.
They are also experimenting with special offers. The initial offer will be “buy one red widget,
get the second half price”.

Your job is to implement the basket which needs to have the following interface –
• It is initialised with the product catalogue, delivery charge rules, and offers (the
format of how these are passed it up to you)
• It has an add method that takes the product code as a parameter.
• It has a total method that returns the total cost of the basket, taking into account
the delivery and offer rules.

Here are some example baskets and expected totals to help you check your
implementation.

Products Total
- B01, G01 $37.85
- R01, R01 $54.37
- R01, G01 $60.85
- B01, B01, R01, R01, R01 $98.27

What we expect to see –

• A solution written in easy to understand and update PHP
• A README file explaining how it works and any assumptions you’ve made
• Pushed to a public Github repo


Project Description.
All comments exist on important line.
I've made Basket class which contains addProduct, removeProduct, getProduct, getTotalCost functions and variables.
Also used PHP session for saving Basket object.
Basket works as really same as E commerce cart.
