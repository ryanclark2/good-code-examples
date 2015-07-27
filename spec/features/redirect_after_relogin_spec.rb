require 'feature_spec_helper'

RSpec.feature 'Clicking a link after session expires' do
  let(:after_sign_in_path) do
    '/metrics/payment-programs/readmissions-reduction-program'
  end

  it 'redirects to link target after signing back in' do
    log_in_user
    within_window(open_new_window) do
      visit root_path
      log_out
      page.driver.browser.close
    end
    visit after_sign_in_path
    log_in_user
    expect(current_path).to eq after_sign_in_path
  end
end
