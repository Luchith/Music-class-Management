package net.javaguides.msc.mapper;

import net.javaguides.msc.dto.EmployeeDto;
import net.javaguides.msc.entity.Employee;

public class EmployeeMapper {
    public static EmployeeDto mapToEmployeeDto(Employee employee){

       return new EmployeeDto(
               employee.getId(),
               employee.getFirstname(),
               employee.getLastname(),
               employee.getEmail(),
               employee.getSubjectname()
       );
    }
    public static  Employee mapToEmployee(EmployeeDto employeeDto){
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail(),
                employeeDto.getSubjectName()

        );
    }
}
