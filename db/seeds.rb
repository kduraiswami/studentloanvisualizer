require 'roo'
require 'open-uri'
require 'pp'

excel_student_loan_portfolios = Roo::Spreadsheet.open('./loanportfoliodata.xlsx')
excel_student_loan_portfolios = Roo::Excelx.new("./loanportfoliodata.xlsx")

raw_student_loan_portfolios = []

excel_student_loan_portfolios.each_row_streaming do |row|
	raw_student_loan_portfolios << row
end

# raw_student_loan_portfolios.each do |individual_loan|
# 	LoanPortfolio.create(
# 		institution_name: individual_loan[1][2].value,
# 		address: individual_loan[1][3].value,
# 		city: individual_loan[1][4].value,
# 		"St" individual_loan[1][5].value,
# 		"ZIP" individual_loan[1][6].value,
# 		borrowers_in_repayment: individual_loan[1][7].value,
# 		borrowers_in_default: individual_loan[1][8].value,
# 		default_rate: individual_loan[1][9].value,
# 		total_borrowers_default: individual_loan[1][10].value,
# 		outstanding_principal: individual_loan[1][11].value,
# 		)
# end

	test_loan = LoanPortfolio.new(
		institution_name: raw_student_loan_portfolios[1][2].value,
		address: raw_student_loan_portfolios[1][3].value,
		city: raw_student_loan_portfolios[1][4].value,
		"St" raw_student_loan_portfolios[1][5].value,
		"ZIP" raw_student_loan_portfolios[1][6].value,
		borrowers_in_repayment: raw_student_loan_portfolios[1][7].value,
		borrowers_in_default: raw_student_loan_portfolios[1][8].value,
		default_rate: raw_student_loan_portfolios[1][9].value,
		total_borrowers_default: raw_student_loan_portfolios[1][10].value,
		outstanding_principal: raw_student_loan_portfolios[1][11].value,
		)
	
# pp raw_student_loan_portfolios[1][2].value
# pp raw_student_loan_portfolios[1][3].value
# pp raw_student_loan_portfolios[1][4].value
# pp raw_student_loan_portfolios[1][5].value
# pp raw_student_loan_portfolios[1][6].value
# pp raw_student_loan_portfolios[1][7].value
# pp raw_student_loan_portfolios[1][8].value
# pp raw_student_loan_portfolios[1][9].value
# pp raw_student_loan_portfolios[1][10].value
# pp raw_student_loan_portfolios[1][11].value
