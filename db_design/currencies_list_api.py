import pymongo

def get_currencies_list_from_file():
    with open("data_src/currencies", 'r') as file:
        currencies_list = file.read()
    return currencies_list.splitlines()

def parse_currency_data():
    data = get_currencies_list_from_file()
    list_currencies = []
    for currency in data:
        stock_name__code = currency.split("#")
        full_name = stock_name__code[1].strip()
        print(stock_name__code, full_name)
        list_currencies.append(
            {
                "stock_name" : stock_name__code[0].split()[0],
                "code" : int(stock_name__code[0].split()[1]),
                "name" : full_name
            }
        )
    return list_currencies

def add_currencies(db):
    list_currencies = parse_currency_data()
    for currency in list_currencies:
        add_new_currency(db, currency)


def add_new_currency(db, currency):
    insereted_currency = db.currencies.insert_one(currency)
    if insereted_currency.acknowledged:
        print("The currency added successful")
    else:
        print("The user was not add")

