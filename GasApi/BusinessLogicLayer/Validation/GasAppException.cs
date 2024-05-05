using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer.Validation;

public class GasAppException : Exception
{
    public GasAppException()
    {
            
    }

    public GasAppException(string message):base(message)
    {
        
    }

    public GasAppException(string message, Exception inner) : base(message, inner)
    {
            
    }
}
