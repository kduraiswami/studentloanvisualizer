class CreateLoanPortfolios < ActiveRecord::Migration
  def change
  	create_table :loan_portfolios do |t|
  		t.string "institution_name"
  		t.string "address"
		t.string "city"
		t.string "St"
		t.string "ZIP"
		t.string "borrowers_in_repayment"
		t.string "borrowers_in_default"
		t.string "default_rate"
		t.string "total_borrowers_default"
		t.string "outsanding_principal"
		t.timestamps
	end
  end
end
