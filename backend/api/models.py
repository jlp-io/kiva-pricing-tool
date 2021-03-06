from api import db
from sqlalchemy.dialects.postgresql import JSON
from flask_sqlalchemy import SQLAlchemy

# db = SQLAlchemy()

class Partner(db.Model):
    """Partner"""
    __tablename__ = "partner"

    partner_name = db.Column(db.String, unique=True, primary_key=True)

    def __init__(self, data):
        if 'partner_name' not in data:
            return #handle error
        self.partner_name = data.partner_name


    def __repr__(self):
        return '<partner {}>'.format(self.id)

class Theme(db.Model):
    """Theme"""
    __tablename__ = "theme"

    loan_theme = db.Column(db.String, unique=True, primary_key=True)

    def __init__(self, data):
        if 'loan_theme' not in data:
            return #handle error
        self.loan_theme = data.loan_theme



    def __repr__(self):
        return '<theme {}>'.format(self.id)

class Loan(db.Model):
    """Loan"""
    __tablename__ = "loan"

    id = db.Column(db.String, unique=True, primary_key=True) #MFI-Partner_Loan-theme_Product-type_Version-num
    partner_name = db.Column(db.String, nullable=False)
    loan_theme = db.Column(db.String, nullable=False)
    product_type = db.Column(db.String, nullable=False)
    version_num = db.Column(db.Integer, nullable=False)
    start_date = db.Column(db.Date, nullable=False)
    update_date = db.Column(db.Date, nullable=False)
    start_name = db.Column(db.String, nullable=False)
    update_name = db.Column(db.String, nullable=False)
    nominal_apr = db.Column(db.Float, nullable=False)

    installment_freq_type = db.column(db.String, nullable=False)
    amortization_type = db.column(db.String, nullable=False)
    interest_freq_type = db.column(db.String, nullable=False)
    interest_payment = db.column(db.String, nullable=False)
    interest_accrue_type = db.column(db.String, nullable=False)
    loan_amount = db.column(db.Float, nullable=False)
    installment = db.column(db.Float, nullable=False)
    nominal_interest_rate = db.column(db.Float, nullable=False)
    grace_period_principal = db.column(db.Integer, nullable=False)
    grace_period_interest_pay = db.column(db.Integer, nullable=False)
    grace_period_interest_calculate = db.column(db.Integer, nullable=False)
    grace_period_balloon = db.column(db.Integer, nullable=False)
    fee_percent_upfront = db.column(db.Float, nullable=False)
    fee_percent_ongoing = db.column(db.Float, nullable=False)
    fee_fixed_upfront = db.column(db.Float, nullable=False)
    fee_fixed_ongoing = db.column(db.Float, nullable=False)
    insurance_percent_upfront = db.column(db.Float, nullable=False)
    insurance_percent_ongoing = db.column(db.Float, nullable=False)
    insurance_fixed_upfront = db.column(db.Float, nullable=False)
    insurance_fixed_ongoing = db.column(db. Float, nullable=False)
    tax_percent_fees = db.column(db.Float, nullable=False)
    tax_percent_interest = db.column(db.Float, nullable=False)
    security_deposit_percent_upfront = db.column(db.Float, nullable=False)
    security_deposit_percent_ongoing = db.column(db.Float, nullable=False)
    security_deposit_fixed_upfront = db.column(db.Float, nullable=False)
    security_deposit_fixed_ongoing = db.column(db.Float, nullable=False)
    interest_paid_on_deposit_percent = db.column(db.Float, nullable=False)


    def __init__(self, data):
        if not all(x in data for x in ['partner_name','loan_theme','product_type','version_num','start_date','update_date','start_name','update_name','nominal_apr','installment_freq_type'
                                        ,'amortization_type','interest_freq_type','interest_payment','interest_accrue_type','loan_amount','installment','nominal_interest_rate','grace_period_principal'
                                        ,'grace_period_interest_pay','grace_period_interest_calculate','grace_period_balloon','fee_percent_upfront','fee_percent_ongoing','fee_fixed_upfront'
                                        ,'fee_fixed_ongoing','insurance_percent_upfront','insurance_percent_ongoing','insurance_fixed_upfront','insurance_fixed_ongoing','tax_percent_fees'
                                        ,'tax_percent_interest','security_deposit_percent_upfront','security_deposit_percent_ongoing','security_deposit_fixed_upfront','security_deposit_fixed_ongoing'
                                        ,'interest_paid_on_deposit_percent']):
            return #handle error

        self.id = data.id
        self.partner_name = data.partner_name
        self.loan_theme = data.loan_theme
        self.product_type = data.product_type
        self.version_num = data.version_num
        self.start_date = data.start_date
        self.update_date = data.update_date
        self.start_name = data.start_name
        self.update_name = data.update_name
        self.nominal_apr = data.nominal_apr
        self.installment_freq_type = data.installment_freq_type
        self.amortization_type = data.amortization_type
        self.interest_freq_type = data.interest_freq_type
        self.interest_payment = data.interest_payment
        self.interest_accrue_type = data.interest_accrue_type
        self.loan_amount = data.loan_amount
        self.installment = data.installment
        self.nominal_interest_rate = data.nominal_interest_rate
        self.grace_period_principal = data.grace_period_principal
        self.grace_period_interest_pay = data.grace_period_interest_pay
        self.grace_period_interest_calculate = data.grace_period_interest_calculate
        self.grace_period_balloon = data.grace_period_balloon
        self.fee_percent_upfront = data.fee_percent_upfront
        self.fee_percent_ongoing = data.fee_percent_ongoing
        self.fee_fixed_upfront = data.fee_fixed_upfront
        self.fee_fixed_ongoing = data.fee_fixed_ongoing
        self.insurance_percent_upfront = data.insurance_percent_upfront
        self.insurance_percent_ongoing = data.insurance_percent_ongoing
        self.insurance_fixed_upfront = data.insurance_fixed_upfront
        self.insurance_fixed_ongoing = data.insurance_fixed_ongoing
        self.tax_percent_fees = data.tax_percent_fees
        self.tax_percent_interest = data.tax_percent_interest
        self.security_deposit_percent_upfront = data.security_deposit_percent_upfront
        self.security_deposit_percent_ongoing = data.security_deposit_percent_ongoing
        self.security_deposit_fixed_upfront = data.security_deposit_fixed_upfront
        self.security_deposit_fixed_ongoing = data.security_deposit_fixed_ongoing
        self.interest_paid_on_deposit_percent = data.interest_paid_on_deposit_percent

    def __repr__(self):
        return '<loan {}>'.format(self.id)

class RepaymentSchedule(db.Model):
    """RepaymentSchedule"""
    __tablename__ = "repayment_schedule"

    id = db.Column(db.String,db.ForeignKey('Loan.id', ondelete='SET NULL'), unique=True, primary_key=True) #MFI_Partner + Loan_theme + Product_type + Version_num
    payment_due_date = db.Column(db.Date, nullable=False)
    days = db.Column(db.Integer, nullable=False)
    amount_due = db.Column(db.Float, nullable=False)
    principal_payment = db.Column(db.Float, nullable=False)
    interest = db.Column(db.Float, nullable=False)
    fees = db.Column(db.Float, nullable=False)
    insurance = db.Column(db.Float, nullable=False)
    taxes = db.Column(db.Float, nullable=False)
    security_deposit = db.Column(db.Float, nullable=False)


    def __init__(self, email):
        if not all(x in data for x in ['partner_name','loan_theme','product_type','version_num','payment_due_date','days','amount_due','principal_payment','interest',
                                        'fees','insurance','taxes','security_deposit']):
            return #handle error
        self.id = data.id
        self.payment_due_date = data.payment_due_date
        self.days = data.days
        self.amount_due = data.amount_due
        self.principal_payment = data.principal_payment
        self.interest = data.interest
        self.fees = data.fees
        self.insurance = data.insurance
        self.taxes = data.taxes
        self.security_deposit = data.security_deposit

    def __repr__(self):
        return '<repayment {}>'.format(self.id)
