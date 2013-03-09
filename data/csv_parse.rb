require 'csv'

out = File.open("data.json", "w")

row_count = 0
colLength = 0

jsonFileArray = Array.new

CSV.foreach("jigh.csv") do |row|
  # use row here.
  if row_count == 2


    #out.puts row[10]
    colCurNum = 2
    colLength = row.size

    #puts colLength
    while colCurNum < (colLength -4)


      #puts row[colCurNum]
      jsonFileArray.push "{\"country\": \"#{row[colCurNum]}\", \n\"countries\":[\n"


      colCurNum += 1
    end
  end

  if row_count > 5 && row_count < 200
    colCurNum = 2

    while colCurNum < (colLength - 4)
      str = "\t{\"country\": \"#{row[1]}\",\"value\": #{row[colCurNum]} }, \n"
      jsonFileArray[colCurNum - 2] += str
      colCurNum += 1
    end

  end

  if row_count == 201
    colCurNum = 2

    while colCurNum < (colLength - 4)
      str = "\t{\"country\": \"#{row[1]}\",\"value\": #{row[colCurNum]} } \n"
      jsonFileArray[colCurNum - 2] += str
      jsonFileArray[colCurNum - 2] += ']}'
      colCurNum += 1
    end

  end

  row_count += 1
end

row_count = 0

out.puts "{\"countries\" : ["
for jsonFileElement in jsonFileArray
  puts jsonFileElement

  if row_count == 0
    out.puts jsonFileElement
  else
    out.puts ","
    out.puts jsonFileElement
  end

  row_count += 1
end
out.puts "]}"


#
#{
#    "country": [
#    {"value": "New", "onclick": "CreateNewDoc()"},
#    {"value": "Open", "onclick": "OpenDoc()"},
#    {"value": "Close", "onclick": "CloseDoc()"}
#]
#}

