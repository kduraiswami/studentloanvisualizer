require 'roo'

xlsx = Roo::Spreadsheet.open('./fixtures/new_prices.xlsx')
xlsx = Roo::Excelx.new("./new_prices.xlsx")