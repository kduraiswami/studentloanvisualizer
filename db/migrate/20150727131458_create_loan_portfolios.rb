class CreateLoanPortfolios < ActiveRecord::Migration
  def change
  	create_table :loan_portfolios do |t|
  		t.string "institution_name"
  		t.string "address"
		t.string "borrowers_in_repayment"
		t.string "borrowers_in_default"
		t.string "default_rate"
		t.string "total_borrowers_default"
		t.string "outstanding_principal"
		t.float "longitude"
		t.float "latitude"
		t.timestamps
	end
  end
end
