require 'pry'

ginger_spice_bank_account = {
  name: "Geri Halliwell",
  balance_usd: 9_000
}

posh_spice_bank_account = {
  account_holder_name: "Victoria Adams",
  balance: 100_000
}

def win_the_lottery(spice_girl)
  spice_girl[:balance] += 1_000_000
  puts "#{ spice_girl[:name] } won the lottery!"
end

win_the_lottery(ginger_spice_bank_account)
# win_the_lottery(posh_spice_bank_account)

